from datetime import datetime
from enum import Enum
from typing import Literal
from pydantic import BaseModel, EmailStr, Field
from pydantic.validators import strict_str_validator
import phonenumbers
from bson import ObjectId


class PhoneNumber(str):
    """Phone Number Pydantic type, using google's phonenumbers"""

    @classmethod
    def __get_validators__(cls):
        yield strict_str_validator
        yield cls.validate

    @classmethod
    def validate(cls, v: str):
        # Remove spaces
        v = v.strip().replace(" ", "")

        try:
            pn = phonenumbers.parse(v, _check_region=False)
        except phonenumbers.phonenumberutil.NumberParseException as e:
            raise ValueError("invalid phone number format") from e

        return cls(
            phonenumbers.format_number(pn, phonenumbers.PhoneNumberFormat.E164)
        )


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


TentType = Literal["prisma", "shater", "safariTent"]


class TentTypeEnum(str, Enum):
    Призма = "prisma"
    Шатер = "shater"
    СафариТент = "safariTent"


class BookingForm(BaseModel):
    first_name: str = Field(..., max_length=100)
    last_name: str = Field(..., max_length=100)
    email: EmailStr = Field(...)
    phone: PhoneNumber = Field(...)
    tent_type: TentType = Field(...)
    check_in_date: datetime = Field(default_factory=datetime.utcnow)
    check_out_date: datetime = Field(default_factory=datetime.utcnow)
    adults: int = Field(..., gt=0)
    children: int = Field(..., ge=0)
    total_members: int = Field(..., gt=0)


class BookingModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    adults: int = Field(..., gt=0)
    children: int = Field(..., ge=0)
    total_members: int = Field(..., gt=0)
    user_id: ObjectId = Field(...)
    tent_id: ObjectId = Field(...)
    creation_date: datetime = Field(default_factory=datetime.utcnow)
    check_in_date: datetime = Field(default_factory=datetime.utcnow)
    check_out_date: datetime = Field(default_factory=datetime.utcnow)
    days_total: int = Field(..., gt=0)
    price: float = Field(..., gt=0)
    is_active: bool = Field(default=True)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}


class UserModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    first_name: str = Field(..., max_length=100)
    last_name: str = Field(..., max_length=100)
    patronymic: str | None = Field(default=None, max_length=100)
    email: EmailStr = Field(...)
    phone: PhoneNumber = Field(...)
    bookings: list[BookingModel] = Field(default=[])

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}


class TentModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    name: str = Field(..., max_length=100)
    tent_type: TentType = Field(...)
    capacity: int = Field(..., gt=0)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
