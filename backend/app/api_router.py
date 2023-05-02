from fastapi import APIRouter


router = APIRouter()


@router.get("/pepe")
async def pepe():
    return {"message": "pepe"}
