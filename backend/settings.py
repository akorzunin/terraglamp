# parse env vars
import os
from dotenv import load_dotenv

load_dotenv()

DEBUG = bool(eval(os.getenv("DEBUG", "False")))
PORT = int(os.getenv("API_PORT", 8000))
HOST = os.getenv("HOST", "0.0.0.0")
