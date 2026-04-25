import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { isAuthenticated, toggleAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    toggleAuth();
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <p>Status: {isAuthenticated ? "Logged In" : "Logged Out"}</p>
      <button onClick={handleLogin}>
        {isAuthenticated ? "Logout" : "Login"}
      </button>
    </div>
  );
}