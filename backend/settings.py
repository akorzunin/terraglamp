# parse env vars
import os

from dotenv import load_dotenv

load_dotenv()

DEBUG = bool(eval(os.getenv("DEBUG", "False")))
PORT = int(os.getenv("API_PORT", 8000))
HOST = os.getenv("HOST", "0.0.0.0")
FRONTEND_HOST = os.getenv("FRONTEND_HOST", "localhost:5173")
MONGODB_URL = os.getenv("MONGODB_URL", "mongodb://localhost:27017")
TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN", "")
