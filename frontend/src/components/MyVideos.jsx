import { Link } from "react-router-dom";
import { useContext } from "react";
import { VideoContext } from "../context/VideoContext";

function MyVideos() {
  const { setSelectedVideo } = useContext(VideoContext);

  const videos = [
    {
      id: 1,
      title: "AI Introduction.mp4",
      category: "Educational",
      status: "Completed",
      date: "03 Jul 2026",
    },
    {
      id: 2,
      title: "Machine Learning.mp4",
      category: "Educational",
      status: "Processing",
      date: "02 Jul 2026",
    },
    {
      id: 3,
      title: "Deep Learning.mp4",
      category: "Educational",
      status: "Completed",
      date: "01 Jul 2026",
    },
  ];

  return (
    <div className="my-videos">
      <h2>My Videos</h2>

      {videos.map((video) => (
        <div className="video-card" key={video.id}>
          <h3>🎥 {video.title}</h3>

          <p>
            <strong>Status:</strong> {video.status}
          </p>

          <p>
            <strong>Category:</strong> {video.category}
          </p>

          <p>
            <strong>Uploaded:</strong> {video.date}
          </p>

          <div className="video-buttons">
            {video.status === "Completed" ? (
              <>
                <Link
                  to={`/creator/transcript/${video.id}`}
                  onClick={() => setSelectedVideo(video)}
                >
                  <button>Transcript</button>
                </Link>

                <Link
                  to={`/creator/summary/${video.id}`}
                  onClick={() => setSelectedVideo(video)}
                >
                  <button>Summary</button>
                </Link>

                <Link
                  to={`/creator/keymoments/${video.id}`}
                  onClick={() => setSelectedVideo(video)}
                >
                  <button>Key Moments</button>
                </Link>

                <Link
                  to={`/creator/analytics/${video.id}`}
                  onClick={() => setSelectedVideo(video)}
                >
                  <button>Analytics</button>
                </Link>
              </>
            ) : (
              <Link
                to="/creator/processing"
                onClick={() => setSelectedVideo(video)}
              >
                <button>View Progress</button>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyVideos;