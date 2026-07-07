from pydantic import BaseModel


class CourseCreate(BaseModel):

    title: str

    description: str

    educator_id: int


class CourseResponse(BaseModel):

    id: int

    title: str

    description: str

    educator_id: int

    class Config:
        from_attributes = True