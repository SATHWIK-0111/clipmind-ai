import Sidebar from "../../components/Sidebar";
import DashboardNavbar from "../../components/DashboardNavbar";
import { useParams, useNavigate } from "react-router-dom";

function Summary() {

  const { videoId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <DashboardNavbar />

        <div className="summary-container">

          <h1>AI Summary</h1>

          <h3>Video ID : {videoId}</h3>

          <div className="summary-card">

            <h2>Overview</h2>

            <p>
              This lecture introduces Artificial Intelligence,
              Machine Learning and Deep Learning concepts.
            </p>

          </div>

          <div className="summary-card">

            <h2>Key Points</h2>

            <ul>

              <li>Artificial Intelligence Overview</li>

              <li>Machine Learning Basics</li>

              <li>Deep Learning Applications</li>

              <li>Real World Use Cases</li>

            </ul>

          </div>

          <div className="summary-buttons">

            <button>Download Summary</button>

            <button
              onClick={() =>
                navigate(`/creator/keymoments/${videoId}`)
              }
            >
              Next → Key Moments
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Summary;