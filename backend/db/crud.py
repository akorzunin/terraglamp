from datetime import datetime, timedelta
from typing import Optional

from backend.db.db_conn import users, tents, bookings
from backend.db.schemas import TentModel, TentType, UserModel


async def find_user_by_email(email: str) -> Optional[UserModel]:
    if document := await users.find_one({"email": email}):
        return UserModel(**document)
    return None


async def create_user(user: UserModel) -> UserModel:
    await users.insert_one(user.dict())
    return user


async def get_tent_by_type(tent_type: TentType) -> TentModel:
    if document := await tents.find_one({"tent_type": tent_type}):
        return TentModel(**document)
    raise ValueError(f"No such type: {tent_type}")


collision_booking_filter = {
    "$and": [
        {"check_in_date": {"$gte": "2023-05-16"}},
        {"check_out_date": {"$lte": "2023-05-19"}},  # +1 day
        {"is_active": True},
        {"tent_id": "645ff3b4c636d434d7b91892"},
    ]
}


def get_collision_booking_filter(
    tent: TentModel, start_date: datetime, end_date: datetime
) -> dict:
    return {
        "$and": [
            {"check_in_date": {"$gte": str(start_date.date())}},
            {
                "check_out_date": {
                    "$lte": str(end_date.date() + timedelta(days=1))
                }
            },
            {"is_active": True},
            {"tent_id": str(tent.id)},
        ]
    }


async def get_collision_booking(
    tent: TentModel, start_date: datetime, end_date: datetime
) -> bool | None:
    if documents := bookings.find(
        filter=get_collision_booking_filter(tent, start_date, end_date)
    ):
        return bool(await documents.to_list(1))
    return None
