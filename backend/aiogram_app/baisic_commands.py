from aiogram import Router
from aiogram.filters import Command
from aiogram.types import Message

router = Router()


@router.message(Command(commands=["help"]))
async def command_start_handler(message: Message) -> None:
    await message.answer(
        """
        Bot commands:
        start - initiate bot functions for user
        help - display availble commands
        """
    )
