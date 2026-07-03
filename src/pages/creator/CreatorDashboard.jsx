import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/DashboardNavbar";

import StatCard from "../../components/StatCard";
import MyVideos from "../../components/MyVideos";
import ProcessingStatus from "../../components/ProcessingStatus";
import Transcript from "./Transcript";
import MyVideosList from "../../components/MyVideos";

function CreatorDashboard() {

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <Navbar />

        <div className="dashboard-body">

          <h1>Welcome, Content Creator 👋</h1>

          <p>
            Manage your uploaded videos and AI-generated results.
          </p>

          <div className="stats-grid">

            <StatCard
              title="Videos"
              value="24"
              color="#2563eb"
            />

            <StatCard
              title="Summaries"
              value="20"
              color="#16a34a"
            />

            <StatCard
              title="Transcripts"
              value="24"
              color="#9333ea"
            />

            <StatCard
              title="Storage"
              value="2.3 GB"
              color="#f97316"
            />

          </div>

          <MyVideosList />

          <ProcessingStatus />

        </div>

      </div>

    </div>

  );

}

export default CreatorDashboard;