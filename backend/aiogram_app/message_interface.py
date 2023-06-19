from typing import Literal
from aiogram.types.message import Message

from backend.aiogram_app.app import bot
from backend.db.db_conn import configs

TgChatGroup = Literal[
    "ADMINS",
    "OWNERS",
    "DEVELOPERS",
]


async def get_chat_id_by_group(group: TgChatGroup) -> str:
    data = await configs.find_one({"group": group})
    if data is None:
        raise ValueError(f"Could not find group {group}")
    if not (chat_id := data.get("chat_id", None)):
        raise ValueError("Could not find chat_id in document")
    return data["chat_id"]


async def send_admin_message(
    group: TgChatGroup,
    message: str,
) -> Message:
    return await bot.send_message(
        chat_id=await get_chat_id_by_group(group),
        text=message,
    )
