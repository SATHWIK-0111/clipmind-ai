from datetime import datetime

from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text
from sqlalchemy import DateTime
from sqlalchemy import ForeignKey

from app.database.base import Base


class Course(Base):

    __tablename__ = "courses"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(255), nullable=False)

    description = Column(Text)

    educator_id = Column(
        Integer,
        ForeignKey("users.id")
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )
    
    # Future relationship placeholder