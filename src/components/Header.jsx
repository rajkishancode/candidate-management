import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const Header = () => {
  const { user, setUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    setUser(null);
    navigate("/");
  };

  return (
    <header className="bg-blue-600 text-white py-4 shadow-md flex justify-between items-center px-8">
      <div className="flex items-center gap-2">
        <FcGoogle size={32} />
        <h1 className="text-2xl font-bold tracking-wide">
          Candidate Management
        </h1>
      </div>
      {user && (
        <div className="flex items-center gap-4">
          <img
            src={user?.photoURL || "https://via.placeholder.com/40"}
            alt={user?.displayName}
            className="w-10 h-10 rounded-full"
          />
          <span className="text-lg font-medium">
            Welcome , {user?.displayName.split(" ")[0]}
          </span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
