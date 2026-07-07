import DashboardLayout from "../../components/DashboardLayout";

function Profile() {

  const fullName = localStorage.getItem("full_name");

  return (

    <DashboardLayout role="educator">

      <h1>Profile</h1>

      <p>Manage your account information.</p>

      <div className="video-card">

        <h3>{fullName}</h3>

        <p>

          <strong>Role:</strong> Educator

        </p>

        <p>

          <strong>Email:</strong> user2@gmail.com

        </p>

      </div>

    </DashboardLayout>

  );

}

export default Profile;