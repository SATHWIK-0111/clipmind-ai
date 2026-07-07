import DashboardLayout from "../../components/DashboardLayout";
import StatCard from "../../components/StatCard";

function Analytics() {

  return (

    <DashboardLayout role="educator">

      <h1>Course Analytics</h1>

      <p>
        Monitor course performance and student engagement.
      </p>

      <div className="stats-grid">

        <StatCard
          title="Courses"
          value="12"
          color="#2563eb"
        />

        <StatCard
          title="Students"
          value="534"
          color="#16a34a"
        />

        <StatCard
          title="Videos"
          value="148"
          color="#9333ea"
        />

        <StatCard
          title="Completion"
          value="81%"
          color="#f97316"
        />

      </div>

      <div className="video-card">

        <h3>Recent Activity</h3>

        <ul>

          <li>📹 AI Fundamentals lecture uploaded</li>

          <li>👨‍🎓 18 students enrolled this week</li>

          <li>📝 Machine Learning quiz published</li>

          <li>⭐ Course rating increased to 4.8/5</li>

        </ul>

      </div>

    </DashboardLayout>

  );

}

export default Analytics;