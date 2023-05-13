from bson import ObjectId
from fastapi import APIRouter, Body
from pydantic import BaseModel, EmailStr, Field
from bson.raw_bson import RawBSONDocument

from backend.db.db_conn import bookings, tents, users, db
from backend.db.schemas import BookingForm, BookingModel, UserModel
from backend.db import crud

router = APIRouter()


class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")


class StudentModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    name: str = Field(...)
    course: str = Field(...)
    gpa: float = Field(..., le=4.0)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "name": "Jane Doe",
                "email": "jdoe@example.com",
                "course": "Experiments, Science, and Fashion in Nanophotonics",
                "gpa": "3.0",
            }
        }


from fastapi.encoders import jsonable_encoder
from fastapi import HTTPException


@router.post("/")
async def booking(booking: BookingForm):
    """Create booking order"""
    # check if user in database

    if not (user := await crud.find_user_by_email(booking.email)):
        # await create user
        user = await crud.create_user(
            UserModel(
                first_name=booking.first_name,
                last_name=booking.last_name,
                email=booking.email,
                phone=booking.phone,
            )
        )
    # check if tent in database
    # find free tent (or find all tents of this type)
    tent = await crud.get_tent_by_type(booking.tent_type)

    booking_model = BookingModel(
        adults=booking.adults,
        children=booking.children,
        total_members=booking.total_members,
        user_id=user.id,
        tent_id=tent.id,
        check_in_date=booking.check_in_date,
        check_out_date=booking.check_out_date,
        days_total=1,
        price=999999,
        # price=get_price(tent.price, booking.total_members),
        # status=booking.status,
    )

    # check if tent is available
    collision_booking = await crud.get_collision_booking(
        tent,
        booking_model.check_in_date,
        booking_model.check_out_date,
    )
    if collision_booking:
        raise HTTPException(status_code=400, detail="Tent is not available")

    raw_booking: RawBSONDocument = jsonable_encoder(booking_model)
    new_booking = await bookings.insert_one(raw_booking)
    return new_booking.inserted_id


@router.patch("/mark-done")
async def mark_done():
    """Mark booking as done"""
    return


@router.delete("/cancel")
async def cancel():
    """Cancel booking"""
    return


@router.get("/list")
async def booking_list():
    """Get all active bookings"""
    return


@router.get("/list/done")
async def booking_list_done():
    """Get all done bookings"""
    return
