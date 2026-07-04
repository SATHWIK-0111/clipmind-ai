from sqlalchemy import Column, Integer, String, ForeignKey, DateTime

from datetime import datetime

from app.database.base import Base


class Video(Base):
    __tablename__ = "videos"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(255), nullable=False)

    filename = Column(String(255), nullable=False)

    status = Column(String(50), default="Processing")

    uploaded_at = Column(DateTime, default=datetime.utcnow)

    user_id = Column(Integer, ForeignKey("users.id"))
    
    description = Column(String(500))

    category = Column(String(100))

    duration = Column(String(50))

    thumbnail = Column(String(255))