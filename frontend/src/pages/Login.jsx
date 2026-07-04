import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">

      <div className="login-left">

        <h1>ClipMind AI</h1>

        <h2>Welcome Back!</h2>

        <p>
          Login to continue summarizing videos using Artificial Intelligence.
        </p>

      </div>

      <div className="login-right">

        <div className="login-card">

          <h2>Login</h2>

          <p>Sign in to your account</p>

          <form>

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <button>

              Login

            </button>

          </form>

          <div className="login-links">

            <Link to="/register">

              Create Account

            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;