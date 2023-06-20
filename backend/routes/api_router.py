from fastapi import APIRouter

from backend.routes.booking_router import router as booking_router
from backend.routes.mail_rourer import router as mail_rourer
from backend.routes.tent_router import router as tent_router
from backend.routes.user_router import router as user_router

router = APIRouter()

router.include_router(
    booking_router,
    prefix="/booking",
    tags=["api/booking"],
)

router.include_router(
    tent_router,
    prefix="/tent",
    tags=["api/tent"],
)

router.include_router(
    user_router,
    prefix="/user",
    tags=["api/user"],
)

router.include_router(
    mail_rourer,
    prefix="/mail",
    tags=["api/mail"],
)
