import Sidebar from "../../components/Sidebar";
import DashboardNavbar from "../../components/DashboardNavbar";
import { useParams } from "react-router-dom";

function Analytics(){

const { videoId }=useParams();

return(

<div className="dashboard">

<Sidebar/>

<div className="dashboard-content">

<DashboardNavbar/>

<div className="summary-container">

<h1>Analytics</h1>

<h3>Video ID : {videoId}</h3>

<div className="stats-grid">

<div className="stat-card">

<p>Duration</p>

<h2>12 min</h2>

</div>

<div className="stat-card">

<p>Transcript Words</p>

<h2>2450</h2>

</div>

<div className="stat-card">

<p>Summary Words</p>

<h2>240</h2>

</div>

<div className="stat-card">

<p>Key Moments</p>

<h2>5</h2>

</div>

</div>

</div>

</div>

</div>

);

}

export default Analytics;