import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";


import CreatorDashboard from "../pages/creator/CreatorDashboard";
import EducatorDashboard from "../pages/educator/EducatorDashboard";
import LearnerDashboard from "../pages/learner/LearnerDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import UploadVideo from "../pages/creator/UploadVideo";
import Processing from "../pages/creator/Processing";
import Transcript from "../pages/creator/Transcript";
import Summary from "../pages/creator/Summary";
import KeyMoments from "../pages/creator/KeyMoments";
import Analytics from "../pages/creator/Analytics";
import Videos from "../pages/creator/Videos";
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

      <Route path="/creator/processing" element={<Processing />}/>

      <Route path="/creator/transcript/:videoId" element={<Transcript />} />

      <Route path="/creator/summary/:videoId" element={<Summary />} />

      <Route path="/creator/keymoments/:videoId" element={<KeyMoments />} />

      <Route path="/creator/analytics/:videoId" element={<Analytics />} />

      <Route
  path="/creator/myvideos"
  element={<Videos />}
/>
    </Routes>
  );
}

export default AppRoutes;