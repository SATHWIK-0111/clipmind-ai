import { Link } from "react-router-dom";
import {
  FaHome,
  FaUpload,
  FaFileAlt,
  FaClipboardList,
  FaChartBar,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="sidebar-logo">
        ClipMind AI
      </div>

      <ul>

        <li>
          <Link to="/creator-dashboard">
            <FaHome /> Dashboard
          </Link>
        </li>

        <li>
          <Link to="/upload">
            <FaUpload /> Upload Video
          </Link>
        </li>

        <li>
          <Link to="#">
            <FaFileAlt /> Transcript
          </Link>
        </li>

        <li>
          <Link to="#">
            <FaClipboardList /> Summary
          </Link>
        </li>

        <li>
          <Link to="#">
            <FaChartBar /> Analytics
          </Link>
        </li>

        <li>
          <Link to="#">
            <FaUser /> Profile
          </Link>
        </li>

        <li>
          <Link to="/">
            <FaSignOutAlt /> Logout
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;