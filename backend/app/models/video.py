from datetime import datetime

from sqlalchemy import Column, DateTime, ForeignKey
from sqlalchemy import Integer, String, Text

from app.database.base import Base
from sqlalchemy import ForeignKey

class Video(Base):

    __tablename__ = "videos"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(255), nullable=False)

    description = Column(Text)

    category = Column(String(100))

    original_filename = Column(String(255), nullable=False)

    filename = Column(String(255), nullable=False)

    file_size = Column(Integer)

    file_type = Column(String(100))

    duration = Column(String(50), nullable=True)

    thumbnail = Column(String(255), nullable=True)

    transcript_path = Column(String(255), nullable=True)

    summary = Column(Text, nullable=True)

    status = Column(String(50), default="Uploaded")

    uploaded_at = Column(DateTime, default=datetime.utcnow)

    user_id = Column(Integer, ForeignKey("users.id"))
    
    course_id = Column(
    Integer,
    ForeignKey("courses.id"),
    nullable=True
    )
    
    course_id = Column(
    Integer,
    ForeignKey("courses.id"),
    nullable=True
    )