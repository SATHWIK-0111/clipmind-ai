from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.postgres import get_db
from app.models.video import Video
from app.models.user import User
from app.models.course import Course
from app.schemas.course import CourseCreate

router = APIRouter(
    prefix="/educator",
    tags=["Educator"]
)


@router.get("/dashboard")
def educator_dashboard(
    db: Session = Depends(get_db)
):
    total_videos = db.query(Video).count()

    total_creators = (
        db.query(User)
        .filter(User.role == "creator")
        .count()
    )

    total_educators = (
        db.query(User)
        .filter(User.role == "educator")
        .count()
    )

    total_learners = (
        db.query(User)
        .filter(User.role == "learner")
        .count()
    )

    return {
        "videos": total_videos,
        "creators": total_creators,
        "educators": total_educators,
        "learners": total_learners,
    }


@router.get("/students")
def get_students(
    db: Session = Depends(get_db)
):
    students = (
        db.query(User)
        .filter(User.role == "learner")
        .all()
    )

    data = []

    for student in students:
        data.append({
            "id": student.id,
            "name": student.full_name,
            "email": student.email,
            "role": student.role,
        })
        
        return data
        
@router.post("/courses")

def create_course(

    course: CourseCreate,

    db: Session = Depends(get_db)

):

    new_course = Course(

        title=course.title,

        description=course.description,

        educator_id=course.educator_id

    )

    db.add(new_course)

    db.commit()

    db.refresh(new_course)

    return {

        "message": "Course created successfully",

        "course_id": new_course.id

    }

    

@router.get("/courses")
def get_courses(
    db: Session = Depends(get_db)
):

    courses = db.query(Course).all()

    data = []

    for course in courses:

        data.append({

            "id": course.id,

            "title": course.title,

            "description": course.description,

            "educator_id": course.educator_id

        })

    return data

@router.put("/courses/{course_id}")
def update_course(

    course_id: int,

    course: CourseCreate,

    db: Session = Depends(get_db)

):

    existing_course = (

        db.query(Course)

        .filter(Course.id == course_id)

        .first()

    )

    if not existing_course:

        return {

            "message": "Course not found"

        }

    existing_course.title = course.title

    existing_course.description = course.description

    existing_course.educator_id = course.educator_id

    db.commit()

    db.refresh(existing_course)

    return {

        "message": "Course updated successfully"

    }
    
@router.delete("/courses/{course_id}")
def delete_course(

    course_id: int,

    db: Session = Depends(get_db)

):

    course = (

        db.query(Course)

        .filter(Course.id == course_id)

        .first()

    )

    if not course:

        return {

            "message": "Course not found"

        }

    db.delete(course)

    db.commit()

    return {

        "message": "Course deleted successfully"

    }
    
