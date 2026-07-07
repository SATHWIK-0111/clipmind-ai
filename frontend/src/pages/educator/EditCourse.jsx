import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../components/DashboardLayout";
import api from "../../api/axios";

function EditCourse() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [title,setTitle]=useState("");

    const [description,setDescription]=useState("");

    useEffect(()=>{

        fetchCourse();

    },[]);

    const fetchCourse=async()=>{

        const res=await api.get("/educator/courses");

        const c=res.data.find(course=>course.id===Number(id));

        if(c){

            setTitle(c.title);

            setDescription(c.description);

        }

    };

    const handleUpdate=async()=>{

        await api.put(`/educator/courses/${id}`,{

            title,

            description,

            educator_id:Number(localStorage.getItem("user_id"))

        });

        alert("Updated Successfully");

        navigate("/educator/courses");

    };

    return(

        <DashboardLayout role="educator">

            <h1>Edit Course</h1>

            <input
            className="upload-input"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />

            <textarea
            className="upload-textarea"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            />

            <button
            className="upload-btn"
            onClick={handleUpdate}
            >

                Update Course

            </button>

        </DashboardLayout>

    );

}

export default EditCourse;