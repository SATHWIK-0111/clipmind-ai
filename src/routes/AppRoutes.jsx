import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import CreatorDashboard from "../pages/creator/CreatorDashboard";
import EducatorDashboard from "../pages/educator/EducatorDashboard";
import LearnerDashboard from "../pages/learner/LearnerDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import UploadVideo from "../pages/creator/UploadVideo";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/creator-dashboard" element={<CreatorDashboard />} />

      <Route path="/educator-dashboard" element={<EducatorDashboard />} />

      <Route path="/learner-dashboard" element={<LearnerDashboard />} />

      <Route path="/admin-dashboard" element={<AdminDashboard />} />

      <Route path="/upload-video" element={<UploadVideo />} />
    </Routes>
  );
}

export default AppRoutes;