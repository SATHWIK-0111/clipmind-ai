import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../components/ProtectedRoute";

import CreatorDashboard from "../pages/creator/CreatorDashboard";
import EducatorDashboard from "../pages/educator/EducatorDashboard";
import LearnerDashboard from "../pages/learner/LearnerDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import UploadContent from "../pages/shared/UploadContent";
import Processing from "../pages/creator/Processing";
import Transcript from "../pages/creator/Transcript";
import Summary from "../pages/creator/Summary";
import KeyMoments from "../pages/creator/KeyMoments";
import CreatorAnalytics from "../pages/creator/Analytics";
import CreatorVideos from "../pages/creator/Videos";
import Courses from "../pages/educator/Courses";
import Students from "../pages/educator/Students";
import EducatorAnalytics from "../pages/educator/Analytics";
import EducatorProfile from "../pages/educator/Profile";
import CreateCourse from "../pages/educator/CreateCourse";
import EditCourse from "../pages/educator/EditCourse";
import LearnerCourses from "../pages/learner/Courses";
import UploadLecture from "../pages/educator/UploadLecture";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
  path="/creator-dashboard"
  element={
    <ProtectedRoute allowedRole="creator">
      <CreatorDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/educator-dashboard"
  element={
    <ProtectedRoute allowedRole="educator">
      <EducatorDashboard />
    </ProtectedRoute>
  }
/>

      <Route
  path="/learner-dashboard"
  element={
    <ProtectedRoute allowedRole="learner">
      <LearnerDashboard />
    </ProtectedRoute>
  }
/>

      <Route
  path="/admin-dashboard"
  element={
    <ProtectedRoute allowedRole="admin">
      <AdminDashboard />
    </ProtectedRoute>
  }
/>

      <Route
    path="/upload-content"
    element={
        <ProtectedRoute allowedRole="creator">
            <UploadContent role="creator" />
        </ProtectedRoute>
    }
/>

      <Route path="/creator/processing" element={<Processing />}/>

      <Route path="/creator/transcript/:videoId" element={<Transcript />} />

      <Route path="/creator/summary/:videoId" element={<Summary />} />

      <Route path="/creator/keymoments/:videoId" element={<KeyMoments />} />

      <Route path="/creator/analytics/:videoId" element={<CreatorAnalytics />} />

      <Route  path="/creator/videos"  element={<CreatorVideos />}  />

      <Route  path="/educator/courses"  element={<Courses />} />

      <Route  path="/educator/students" element={<Students />}  />

      <Route  path="/educator/analytics"  element={<EducatorAnalytics />} />

      <Route  path="/educator/profile"  element={<EducatorProfile />} />

      <Route
    path="/educator/create-course"
    element={<CreateCourse />}
/>

      <Route
path="/educator/edit-course/:id"
element={<EditCourse/>}
/>
      <Route

path="/learner/courses"

element={<LearnerCourses/>}

/>

<Route
  path="/educator/upload-lecture"
  element={
    <ProtectedRoute allowedRole="educator">
      <UploadLecture />
    </ProtectedRoute>
  }
/>
    </Routes>
  );

  
}

export default AppRoutes;