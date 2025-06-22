from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

class LoginRequest(BaseModel):
    username: str
    password: str

@router.post("/login")
def login(payload: LoginRequest):
    if payload.username == "admin" and payload.password == "pass123":
        return {"token": "fake-jwt-token", "message": "Login successful"}
    raise HTTPException(status_code=401, detail="Invalid credentials")