import asyncio

from fastapi import APIRouter, status
from fastapi.responses import JSONResponse

from backend.aiogram_app.message_interface import (
    TgChatGroup,
    send_admin_message,
)
from backend.mail_handler import UserEmail, send_email

router = APIRouter()


@router.post(
    "/send_mail",
    status_code=status.HTTP_200_OK,
)
async def send_mail(user_email: UserEmail):
    """Send mail to user"""
    asyncio.gather(
        send_email(
            email=user_email.email,
            subject=user_email.subject,
            mail_text=user_email.text,
        )
    )
    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={"message": "email has been sent"},
    )


@router.post("/send_telegram_message")
async def send_telegram_message(
    group: TgChatGroup,
    message: str,
):
    """Send telegram message"""
    await send_admin_message(group, message)
    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={"message": "message has been sent"},
    )
