import Sidebar from "../../components/Sidebar";
import DashboardNavbar from "../../components/DashboardNavbar";
import { useParams, useNavigate } from "react-router-dom";

function Transcript() {
  const { videoId } = useParams();
  const navigate = useNavigate();

  // Dummy data (Later this will come from FastAPI)
  const transcriptData = {
    videoId: videoId,
    title: "AI Introduction.mp4",
    category: "Educational",

    transcript: [
      {
        time: "00:00",
        text: "Welcome everyone to today's AI lecture.",
      },
      {
        time: "00:18",
        text: "Artificial Intelligence is transforming industries.",
      },
      {
        time: "00:42",
        text: "Machine Learning is a subset of Artificial Intelligence.",
      },
      {
        time: "01:15",
        text: "Deep Learning uses neural networks for prediction.",
      },
      {
        time: "02:00",
        text: "Let's explore some real-world applications.",
      },
    ],
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <DashboardNavbar />

        <div className="transcript-container">
          <h1>Transcript</h1>

          <h3>{transcriptData.title}</h3>

          <p>
            <strong>Video ID:</strong> {transcriptData.videoId}
          </p>

          <p>
            <strong>Category:</strong> {transcriptData.category}
          </p>

          <input
            type="text"
            placeholder="Search transcript..."
            className="search-box"
          />

          <div className="transcript-box">
            {transcriptData.transcript.map((line, index) => (
              <div className="transcript-line" key={index}>
                <span>{line.time}</span>

                <p>{line.text}</p>
              </div>
            ))}
          </div>

          <div className="transcript-buttons">
            <button>Download Transcript</button>

            <button
              onClick={() =>
                navigate(`/creator/summary/${videoId}`)
              }
            >
              Next → Summary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transcript;