import DashboardLayout from "../../components/DashboardLayout";

import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { useState, useEffect } from "react";

function UploadContent({ role = "creator" }) {

  const navigate = useNavigate();

  const [video, setVideo] = useState(null);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [category, setCategory] = useState("Educational");

  const [loading, setLoading] = useState(false);

  const [courses, setCourses] = useState([]);

  const [courseId, setCourseId] = useState("");

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  useEffect(() => {

    fetchCourses();

}, []);

const fetchCourses = async () => {

    try {

        const res = await api.get("/educator/courses");

        setCourses(res.data);

    }

    catch(err){

        console.log(err);

    }

};

  const handleUpload = async () => {

    if (!video) {
      alert("Please select a video.");
      return;
    }

    if (!title) {
      alert("Please enter a title.");
      return;
    }

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("user_id", localStorage.getItem("user_id"));
    formData.append("video", video);
    formData.append("course_id", courseId);

    try {

      setLoading(true);

      await api.post(
        "/creator/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Video Uploaded Successfully!");

      navigate("/creator/videos");

    } catch (err) {

      console.log(err);

      alert("Upload Failed");

    } finally {

      setLoading(false);

    }

  };

  return (

    <DashboardLayout role={role}>

      <div className="upload-container">

        <h1>Upload New Video</h1>

        <p>
          Upload your lecture, meeting or educational video for AI processing.
        </p>

        <div className="upload-box">

          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
          />

          {video && (

            <div className="selected-video">

              <h3>Selected File</h3>

              <p>{video.name}</p>

            </div>

          )}

        </div>

        <input
          type="text"
          placeholder="Video Title"
          className="upload-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Video Description"
          className="upload-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <p>

Lecture Count:

0

</p>

        <select
          className="upload-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >

          <option>Educational</option>

          <option>Business Meeting</option>

          <option>Podcast</option>

          <option>Interview</option>

        </select>

          {

role==="educator" &&

<select

className="upload-input"

value={courseId}

onChange={(e)=>setCourseId(e.target.value)}

>

<option value="">

Select Course

</option>

{

courses.map(course=>(

<option

key={course.id}

value={course.id}

>

{course.title}

</option>

))

}

</select>

}
        <button
          className="upload-btn"
          onClick={handleUpload}
          disabled={loading}
        >

          {loading ? "Uploading..." : "Upload Video"}

        </button>

      </div>

    </DashboardLayout>

  );

}

export default UploadContent;