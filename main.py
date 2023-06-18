import asyncio
import os
import uvicorn
from fastapi import FastAPI

from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware

from backend.routes import api_router
from backend.admin.app import admin
from backend.settings import DEBUG, FRONTEND_HOST
from backend.aiogram_app.app import dp, bot


app = FastAPI(
    title="TerraGlamp",
    description="TerraGlamp",
    version="0.1.0",
    openapi_url="/api/openapi.json",
    docs_url="/api/docs",
    redoc_url=None,
)

# only for dev
if DEBUG:
    origins = ["*"]

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

app.include_router(
    api_router.router,
    prefix="/api",
)

admin.mount_to(app)

loop = asyncio.new_event_loop()

uvicorn_conf = uvicorn.Config(
    loop="asyncio",
    app="main:app",
    host=os.getenv("HOST", "0.0.0.0"),
    port=int(os.getenv("PORT") or 8888),
    # log_level=log_level,
    # log_config=log_config,
    reload=bool(eval(os.getenv("DEBUG", "False"))),
)

if __name__ == "__main__":
    server = uvicorn.Server(uvicorn_conf)
    loop.create_task(server.serve())
    loop.create_task(dp.start_polling(bot))
    loop.run_forever()
