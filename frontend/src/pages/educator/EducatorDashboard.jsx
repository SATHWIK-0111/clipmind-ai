import { useEffect, useState } from "react";

import DashboardLayout from "../../components/DashboardLayout";
import StatCard from "../../components/StatCard";

import api from "../../api/axios";

function EducatorDashboard() {

  const [dashboard, setDashboard] = useState({

    videos: 0,

    creators: 0,

    educators: 0,

    learners: 0,

  });

  useEffect(() => {

    fetchDashboard();

  }, []);

  const fetchDashboard = async () => {

    try {

      const res = await api.get("/educator/dashboard");

      setDashboard(res.data);

    }

    catch (err) {

      console.log(err);

    }

  };

  return (

    <DashboardLayout role="educator">

      <h1>Welcome, Educator 👋</h1>

      <p>

        Manage your courses and monitor student progress.

      </p>

      <div className="stats-grid">

        <StatCard
          title="Videos"
          value={dashboard.videos}
          color="#2563eb"
        />

        <StatCard
          title="Creators"
          value={dashboard.creators}
          color="#16a34a"
        />

        <StatCard
          title="Educators"
          value={dashboard.educators}
          color="#9333ea"
        />

        <StatCard
          title="Learners"
          value={dashboard.learners}
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

    </DashboardLayout>

  );

}

export default EducatorDashboard;