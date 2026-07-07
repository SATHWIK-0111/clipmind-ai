function DashboardNavbar() {

  const fullName = localStorage.getItem("full_name");

  return (

    <div className="top-navbar">

      <h2>Dashboard</h2>

      <div className="user-info">

        <span>

          Hello, {fullName} 👋

        </span>

      </div>

    </div>

  );

}

export default DashboardNavbar;