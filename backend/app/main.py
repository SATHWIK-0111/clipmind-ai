from fastapi import FastAPI

from app.database.base import Base
from app.database.postgres import engine

# Import models
from app.models.user import User
from app.models.video import Video

app = FastAPI(
    title="ClipMind AI",
    version="1.0.0"
)

# Create database tables
Base.metadata.create_all(bind=engine)


@app.get("/")
def home():
    return {
        "message": "Welcome to ClipMind AI Backend 🚀"
    }


@app.get("/health")
def health():
    return {
        "status": "Server Running Successfully"
    }