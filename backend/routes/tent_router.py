from fastapi import APIRouter


router = APIRouter()


@router.get("/is-available")
async def is_available():
    return {"is_available": True}
