from fastapi import APIRouter

from backend.app.booking_router import router as booking_router

router = APIRouter()

router.include_router(
    booking_router,
    prefix="/api/booking",
    tags=["booking"],
)

@router.get("/pepe")
async def pepe():
    return {"message": "pepe"}


@router.post("/booking")
async def booking():
    """Create booking order"""
    return


@router.patch("/booking/mark-done")
async def mark_done():
    """Mark booking as done"""
    return


@router.delete("/booking/cancel")
async def cancel():
    """Cancel booking"""
    return


@router.get("/booking/list")
async def booking_list():
    """Get all active bookings"""
    return


@router.get("/booking/list/done")
async def booking_list_done():
    """Get all done bookings"""
    return
