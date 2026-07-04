import { Link } from "react-router-dom";
import {
  FaHome,
  FaUpload,
  FaVideo,
  FaBook,
  FaUsers,
  FaChartBar,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar({ role = "creator" }) {

  const menus = {

    creator: [
      { name: "Dashboard", icon: <FaHome />, path: "/creator-dashboard" },
      { name: "Upload Video", icon: <FaUpload />, path: "/upload-video" },
      { name: "My Videos", icon: <FaVideo />, path: "/creator/videos" },
    ],

    educator: [
      { name: "Dashboard", icon: <FaHome />, path: "/educator-dashboard" },
      { name: "Courses", icon: <FaBook />, path: "#" },
      { name: "Students", icon: <FaUsers />, path: "#" },
      { name: "Analytics", icon: <FaChartBar />, path: "#" },
    ],

    learner: [
      { name: "Dashboard", icon: <FaHome />, path: "/learner-dashboard" },
      { name: "My Courses", icon: <FaBook />, path: "#" },
      { name: "Bookmarks", icon: <FaVideo />, path: "#" },
      { name: "Progress", icon: <FaChartBar />, path: "#" },
    ],

    admin: [
      { name: "Dashboard", icon: <FaHome />, path: "/admin-dashboard" },
      { name: "Users", icon: <FaUsers />, path: "#" },
      { name: "Videos", icon: <FaVideo />, path: "#" },
      { name: "Reports", icon: <FaChartBar />, path: "#" },
    ],

  };

  return (

    <div className="sidebar">

      <div className="sidebar-logo">

        ClipMind AI

      </div>

      <ul>

        {menus[role].map((item, index) => (

          <li key={index}>

            <Link to={item.path}>

              {item.icon}

              {" "}

              {item.name}

            </Link>

          </li>

        ))}

        <li>

          <Link to="/">

            <FaSignOutAlt />

            {" "}

            Logout

          </Link>

        </li>

      </ul>

    </div>

  );

}

export default Sidebar;