import DashboardLayout from "../../components/DashboardLayout";
import StatCard from "../../components/StatCard";
import MyVideos from "../../components/MyVideos";
import ProcessingStatus from "../../components/ProcessingStatus";

function CreatorDashboard() {

  return (

    <DashboardLayout role="creator">

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

      <MyVideos />

      <ProcessingStatus />

    </DashboardLayout>

  );

}

export default CreatorDashboard;