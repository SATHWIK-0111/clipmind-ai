import Sidebar from "../../components/Sidebar";
import DashboardNavbar from "../../components/DashboardNavbar";
import StatCard from "../../components/StatCard";

function EducatorDashboard() {
  return (
    <div className="dashboard">

      <Sidebar role="educator" />

      <div className="dashboard-content">

        <DashboardNavbar />

        <div className="dashboard-body">

          <h1>Welcome, Educator 👋</h1>

          <p>
            Manage your courses and monitor student progress.
          </p>

          <div className="stats-grid">

            <StatCard
              title="Courses"
              value="12"
              color="#2563eb"
            />

            <StatCard
              title="Students"
              value="248"
              color="#16a34a"
            />

            <StatCard
              title="Videos"
              value="57"
              color="#9333ea"
            />

            <StatCard
              title="Completion"
              value="91%"
              color="#f97316"
            />

          </div>

          <div className="summary-card">

            <h2>Recent Courses</h2>

            <ul>
              <li>Artificial Intelligence</li>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
            </ul>

          </div>

          <div className="summary-card">

            <h2>Student Progress</h2>

            <ul>
              <li>John - 85%</li>
              <li>Rahul - 72%</li>
              <li>Sathwik - 98%</li>
            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EducatorDashboard;