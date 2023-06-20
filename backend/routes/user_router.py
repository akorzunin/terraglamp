from fastapi import APIRouter

router = APIRouter()


@router.get("/bookings")
async def get_user_bookings():
    """Get all bookings for a user"""
    return {"message": "get_user_bookings"}
