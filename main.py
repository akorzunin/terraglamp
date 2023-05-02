import uvicorn
from fastapi import FastAPI, Request

from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import RedirectResponse, FileResponse
from fastapi.middleware.cors import CORSMiddleware

from backend.app.api_router import router as api_router
from backend.settings import DEBUG


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
    api_router,
    prefix="/api",
    tags=["api"],
)


@app.get("/")
async def root():
    return RedirectResponse(
        "https://test-tilda-terraglamp.duckdns.org/terraglamp"
    )


if __name__ == "__main__":
    uvicorn.run(
        app,
        host="0.0.0.0",
        port=8888,
    )
    # uvicorn main:app --reload --host 0.0.0.0 --port 8888
