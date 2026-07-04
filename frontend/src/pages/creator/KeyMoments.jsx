import Sidebar from "../../components/Sidebar";
import DashboardNavbar from "../../components/DashboardNavbar";
import { useParams, useNavigate } from "react-router-dom";

function KeyMoments(){

const { videoId } = useParams();

const navigate=useNavigate();

const moments=[

{
time:"00:18",
title:"Introduction"
},

{
time:"01:20",
title:"Artificial Intelligence"
},

{
time:"03:45",
title:"Machine Learning"
},

{
time:"06:15",
title:"Deep Learning"
},

{
time:"09:00",
title:"Applications"
}

];

return(

<div className="dashboard">

<Sidebar/>

<div className="dashboard-content">

<DashboardNavbar/>

<div className="summary-container">

<h1>Key Moments</h1>

{

moments.map((moment,index)=>(

<div
className="moment-card"
key={index}
>

<h3>

{moment.time}

</h3>

<p>

{moment.title}

</p>

</div>

))

}

<div className="summary-buttons">

<button
onClick={()=>
navigate(`/creator/analytics/${videoId}`)
}
>

Next → Analytics

</button>

</div>

</div>

</div>

</div>

);

}

export default KeyMoments;