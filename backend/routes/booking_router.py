from fastapi import APIRouter


router = APIRouter()


@router.post("/")
async def booking():
    """Create booking order"""
    return


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
