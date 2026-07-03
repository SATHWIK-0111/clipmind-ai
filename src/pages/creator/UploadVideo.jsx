import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/DashboardNavbar";
import { useState } from "react";

function UploadVideo() {

  const [video, setVideo] = useState(null);

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <Navbar />

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
          />

          <textarea
            placeholder="Video Description"
            className="upload-textarea"
          ></textarea>

          <select className="upload-input">

            <option>Educational</option>

            <option>Business Meeting</option>

            <option>Podcast</option>

            <option>Interview</option>

          </select>

          <input
            type="text"
            placeholder="Tags (AI, ML, Python)"
            className="upload-input"
          />

          <button className="upload-btn">

            Upload Video

          </button>

        </div>

      </div>

    </div>

  );

}

export default UploadVideo;