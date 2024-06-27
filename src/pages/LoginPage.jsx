import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login, setUser } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const user = await login();

      setUser(user);

      navigate("/home");
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-700">
          Welcome to Candidate Management App
        </h1>
        <button
          onClick={handleLogin}
          className="flex items-center justify-center w-full bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          <FcGoogle size={24} className="mr-2" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
