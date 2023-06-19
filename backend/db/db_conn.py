import asyncio
import motor.motor_asyncio

from backend.settings import MONGODB_URL


client = motor.motor_asyncio.AsyncIOMotorClient(
    MONGODB_URL,
    serverSelectionTimeoutMS=1000,
)
client.get_io_loop = asyncio.get_event_loop  # type: ignore

db = client.terraglamp

bookings = db.bookings
tents = db.tents
users = db.users
configs = db.configs
