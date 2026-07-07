import os
import uuid
import shutil

from fastapi import APIRouter, Depends, UploadFile, File, Form
from sqlalchemy.orm import Session

from app.database.postgres import get_db
from app.models.video import Video

router = APIRouter(
    prefix="/creator",
    tags=["Creator"]
)

UPLOAD_FOLDER = "uploads/videos"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


# -------------------------------
# Upload Video
# -------------------------------
@router.post("/upload")
async def upload_video(

    title: str = Form(...),

    description: str = Form(""),

    category: str = Form(""),
    
    course_id: int = Form(None),

    user_id: int = Form(...),

    video: UploadFile = File(...),

    db: Session = Depends(get_db),

):

    # Generate unique filename
    extension = os.path.splitext(video.filename)[1]
    unique_filename = f"{uuid.uuid4()}{extension}"

    filepath = os.path.join(
        UPLOAD_FOLDER,
        unique_filename
    )

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(video.file, buffer)

    file_size = os.path.getsize(filepath)

    new_video = Video(

        title=title,

        description=description,
        
        course_id=course_id,

        category=category,

        original_filename=video.filename,

        filename=unique_filename,

        file_size=file_size,

        file_type=video.content_type,

        duration=None,

        thumbnail=None,

        transcript_path=None,

        summary=None,

        user_id=user_id,

        status="Uploaded"

    )

    db.add(new_video)
    db.commit()
    db.refresh(new_video)

    return {

        "message": "Video uploaded successfully",

        "video": {

            "id": new_video.id,

            "title": new_video.title,

            "description": new_video.description,

            "category": new_video.category,

            "filename": new_video.filename,

            "status": new_video.status,

            "user_id": new_video.user_id

        }

    }


# -------------------------------
# Get All Videos of a User
# -------------------------------
@router.get("/videos")
def get_videos(

    user_id: int,

    db: Session = Depends(get_db)

):

    videos = (

        db.query(Video)

        .filter(Video.user_id == user_id)

        .order_by(Video.uploaded_at.desc())

        .all()

    )

    return videos


# -------------------------------
# Get Single Video
# -------------------------------
@router.get("/video/{video_id}")
def get_video(

    video_id: int,

    db: Session = Depends(get_db)

):

    video = (

        db.query(Video)

        .filter(Video.id == video_id)

        .first()

    )

    if not video:

        return {

            "message": "Video not found"

        }

    return video


# -------------------------------
# Delete Video
# -------------------------------
@router.delete("/video/{video_id}")
def delete_video(

    video_id: int,

    db: Session = Depends(get_db)

):

    video = (

        db.query(Video)

        .filter(Video.id == video_id)

        .first()

    )

    if not video:

        return {

            "message": "Video not found"

        }

    filepath = os.path.join(
        UPLOAD_FOLDER,
        video.filename
    )

    if os.path.exists(filepath):
        os.remove(filepath)

    db.delete(video)
    db.commit()

    return {

        "message": "Video deleted successfully"

    }