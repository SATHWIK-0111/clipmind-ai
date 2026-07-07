import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { VideoContext } from "../context/VideoContext";
import api from "../api/axios";

function MyVideos() {

  const { setSelectedVideo } = useContext(VideoContext);

  const [videos, setVideos] = useState([]);

  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {

    try {

      const res = await api.get(
        `/creator/videos?user_id=${userId}`
      );

      setVideos(res.data);

    }

    catch (err) {

      console.log(err);

    }

  };

  const deleteVideo = async (videoId) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this video?"
    );

    if (!confirmDelete) return;

    try {

      await api.delete(`/creator/video/${videoId}`);

      alert("Video Deleted Successfully");

      fetchVideos();

    }

    catch (err) {

      console.log(err);

      alert("Delete Failed");

    }

  };

  return (

    <div className="my-videos">

      <h2>My Videos</h2>

      {

        videos.length === 0

        ?

        <p>No videos uploaded yet.</p>

        :

        videos.map((video) => (

          <div className="video-card" key={video.id}>

            <h3>🎥 {video.title}</h3>

            <video
              width="320"
              controls
              style={{
                borderRadius: "10px",
                marginBottom: "15px"
              }}
            >

              <source
                src={`http://127.0.0.1:8000/uploads/videos/${video.filename}`}
                type="video/mp4"
              />

              Your browser does not support the video tag.

            </video>

            <p>

              <strong>Status:</strong>{" "}

              {video.status}

            </p>

            <p>

              <strong>Category:</strong>{" "}

              {video.category}

            </p>

            <p>

              <strong>Description:</strong>{" "}

              {video.description}

            </p>

            <div className="video-buttons">

              {

                video.status === "Uploaded" ||

                video.status === "Completed"

                ?

                <>

                  <Link
                    to={`/creator/transcript/${video.id}`}
                    onClick={() => setSelectedVideo(video)}
                  >

                    <button>

                      Transcript

                    </button>

                  </Link>

                  <Link
                    to={`/creator/summary/${video.id}`}
                    onClick={() => setSelectedVideo(video)}
                  >

                    <button>

                      Summary

                    </button>

                  </Link>

                  <Link
                    to={`/creator/keymoments/${video.id}`}
                    onClick={() => setSelectedVideo(video)}
                  >

                    <button>

                      Key Moments

                    </button>

                  </Link>

                  <Link
                    to={`/creator/analytics/${video.id}`}
                    onClick={() => setSelectedVideo(video)}
                  >

                    <button>

                      Analytics

                    </button>

                  </Link>

                  <button
                    onClick={() => deleteVideo(video.id)}
                    style={{
                      backgroundColor: "#dc2626",
                      color: "white"
                    }}
                  >

                    Delete

                  </button>

                </>

                :

                <Link
                  to="/creator/processing"
                  onClick={() => setSelectedVideo(video)}
                >

                  <button>

                    View Progress

                  </button>

                </Link>

              }

            </div>

          </div>

        ))

      }

    </div>

  );

}

export default MyVideos;