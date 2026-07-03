import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-container">

      <div className="register-left">

        <h1>ClipMind AI</h1>

        <h2>Create Your Account</h2>

        <p>
          Join ClipMind AI and start transforming long videos into concise,
          AI-powered summaries.
        </p>

      </div>

      <div className="register-right">

        <div className="register-card">

          <h2>Register</h2>

          <p>Create a new account</p>

          <form>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <input
              type="password"
              placeholder="Confirm Password"
            />

            <select defaultValue="">
              <option value="" disabled>Select your role</option>
              <option value="creator">Content Creator</option>
              <option value="educator">Educator</option>
              <option value="learner">Learner</option>
            </select>

            <button>

              Register

            </button>

          </form>

          <div className="register-links">

            <Link to="/login">

              Already have an account?

            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;