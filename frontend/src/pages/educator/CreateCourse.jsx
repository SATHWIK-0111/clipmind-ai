import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/DashboardLayout";
import api from "../../api/axios";

function CreateCourse() {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const handleSubmit = async () => {

    if (!title) {

      alert("Enter course title");

      return;

    }

    try {

      await api.post("/educator/courses", {

        title,

        description,

        educator_id: Number(localStorage.getItem("user_id"))

      });

      alert("Course Created Successfully");

      navigate("/educator/courses");

    }

    catch(err){

      console.log(err);

      alert("Failed");

    }

  };

  return (

    <DashboardLayout role="educator">

      <h1>Create Course</h1>

      <input
        className="upload-input"
        placeholder="Course Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />

      <textarea
        className="upload-textarea"
        placeholder="Course Description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
      />

      <button
        className="upload-btn"
        onClick={handleSubmit}
      >

        Create Course

      </button>

    </DashboardLayout>

  );

}

export default CreateCourse;