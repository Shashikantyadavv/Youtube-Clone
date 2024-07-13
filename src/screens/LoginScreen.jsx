import { useDispatch, useSelector } from "react-redux";
import {Login} from "../redux/actions/Auth.action";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleClick = () => {
    dispatch(Login());
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/", { replace: true });
    }
  }, [accessToken, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md text-center">
        {/* YouTube Icon Placeholder */}
        <div className="mb-8">
          <img
            src="https://imgs.search.brave.com/3drONenldx-Q6uAxHypy3k_rhof_qIfwKHwEpGQ3tpE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzE5/NS9QTkcvOTYvWW91/VHViZV8yMzM5Mi5w/bmc"
            alt="YouTube Logo"
            className="h-16 w-auto mx-auto"
          />
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold mb-8">Welcome to YouTube</h2>

        {/* Hollow Google Login Button */}
        <button
          onClick={handleClick}
          className="bg-transparent border border-gray-300 p-2 w-full rounded-md text-center"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
