import Sidebar from "../../components/Sidebar";
import DashboardNavbar from "../../components/DashboardNavbar";

function Processing() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <DashboardNavbar />

        <div className="processing-container">

          <h1>AI Video Processing</h1>

          <p>
            Your video has been uploaded successfully.
          </p>

          <div className="process-card">

            <h3>✔ Video Uploaded</h3>

            <progress value="100" max="100"></progress>

          </div>

          <div className="process-card">

            <h3>🎵 Extracting Audio</h3>

            <progress value="100" max="100"></progress>

          </div>

          <div className="process-card">

            <h3>📝 Generating Transcript</h3>

            <progress value="70" max="100"></progress>

          </div>

          <div className="process-card">

            <h3>🤖 Creating Summary</h3>

            <progress value="45" max="100"></progress>

          </div>

          <div className="process-card">

            <h3>⭐ Detecting Key Moments</h3>

            <progress value="20" max="100"></progress>

          </div>

          <p className="processing-note">

            Please wait while ClipMind AI processes your video...

          </p>

        </div>

      </div>

    </div>
  );
}

export default Processing;