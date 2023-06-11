from fastapi import APIRouter, status
from bson.raw_bson import RawBSONDocument
from fastapi.encoders import jsonable_encoder
from fastapi import HTTPException

from backend.db.schemas import BookingForm, BookingModel, UserModel, Message
from backend.db import crud

router = APIRouter()


@router.post(
    "/",
    responses={409: {"model": Message}},
)
async def booking(booking: BookingForm) -> str:
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
    # find free tent in all tents of this type)
    tents = crud.get_all_tent_by_type(booking.tent_type)
    if not tents:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Tent type not found",
        )
    async for tent in tents:
        # check if tent is available
        collision_booking = await crud.get_collision_booking(
            tent,
            booking.check_in_date,
            booking.check_out_date,
        )
        if not collision_booking:
            break
    else:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="No tents available for this period",
        )

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

    return await crud.create_booking(booking_model)


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
