import { useEffect,useState } from "react";

import DashboardLayout from "../../components/DashboardLayout";

import api from "../../api/axios";

function Courses(){

const [courses,setCourses]=useState([]);

useEffect(()=>{

fetchCourses();

},[]);

const fetchCourses=async()=>{

const res=await api.get("/learner/courses");

setCourses(res.data);

};

return(

<DashboardLayout role="learner">

<h1>Available Courses</h1>

{

courses.map(course=>(

<div
className="video-card"
key={course.id}
>

<h2>{course.title}</h2>

<p>{course.description}</p>

<button

onClick={async()=>{

await api.post(

`/enrollment/${course.id}`,

null,

{

params:{

learner_id:localStorage.getItem("user_id")

}

}

);

alert("Enrolled Successfully");

}}

>

Enroll

</button>

</div>

))

}

</DashboardLayout>

);

}

export default Courses;