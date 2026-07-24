import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginUser, register } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import "./Auth.css";

function AuthPage() {
  const navigate = useNavigate();

  const { login: authLogin } = useAuth();

  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const switchMode = () => {
    setError("");

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      if (isLogin) {
        const data = await loginUser({
          email: formData.email,
          password: formData.password,
        });

        authLogin(data.user, data.token);

        navigate("/dashboard");
      } else {
        await register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });

        setIsLogin(true);

        setFormData({
          name: "",
          email: formData.email,
          password: "",
          confirmPassword: "",
        });

        alert("Registration successful! Please login.");
      }
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
          err.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1>TaskCraft</h1>

          <p>
            {isLogin
              ? "Manage your work effortlessly."
              : "Create your TaskCraft account"}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label>Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {error && <div className="auth-error">{error}</div>}

          <button
            type="submit"
            className="auth-btn"
            disabled={loading}
          >
            {loading
              ? "Please wait..."
              : isLogin
              ? "Login"
              : "Create Account"}
          </button>

          <div className="auth-footer">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <span
                  className="auth-link"
                  onClick={switchMode}
                >
                  Create Account
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  className="auth-link"
                  onClick={switchMode}
                >
                  Sign In
                </span>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;