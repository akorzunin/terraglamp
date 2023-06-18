# register baisic commands
from aiogram import Bot, Dispatcher
from backend.aiogram_app import baisic_commands
from backend.settings import TELEGRAM_TOKEN

if not TELEGRAM_TOKEN:
    raise ValueError("TOKEN is not set in .env file")
bot = Bot(TELEGRAM_TOKEN)

dp = Dispatcher()
dp.include_router(baisic_commands.router)
