# init fastapi project
import uvicorn
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse

app = FastAPI(
    title="TerraGlamp",

    description="TerraGlamp",
    version="0.1.0",
)
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import RedirectResponse, FileResponse

templates = Jinja2Templates(directory="./frontend/dist")

app.mount("/assets", StaticFiles(directory="./frontend/dist/assets"), name="assets")
app.mount("/static", StaticFiles(directory="./frontend/static"), name="static")

@app.get('/favicon.ico', include_in_schema=False)
async def favicon():
    return FileResponse('./frontend/static/favicon.ico')

@app.get("/book")
async def root_(request: Request, ):
    return templates.TemplateResponse(
        "index.html",
        {
            "request": request
        },
    )


@app.get("/")
async def root_():
    return RedirectResponse("https://test-tilda-terraglamp.duckdns.org/terraglamp")


if __name__ == '__main__':

    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True,)
    # uvicorn main:app --reload --host 0.0.0.0 --port 8888