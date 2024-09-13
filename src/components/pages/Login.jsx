import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { DataContext } from "../../context/DataProvider";
import API from "../service/api"; // Assuming API is correctly imported

const loginInitialValues = {
  username: "",
  password: "",
};

const Login = ({ isUserAuthenticated }) => {
  const [login, setLogin] = useState(loginInitialValues);
  const [error, showError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // const { setAccount } = useContext(DataContext);

  useEffect(() => {
    showError(false);
  }, [login]);

  // const onValueChange = (e) => {
  //   setLogin({ ...login, [e.target.name]: e.target.value });
  // };
  
  const loginUser = async () => {
    try {
      let response = await API.userLogin(login);
      console.log("API Call", response);

      if (response.isSuccess) {
        showError("");
        sessionStorage.setItem(
          "accessToken",
          `Bearer ${response.data.accessToken}`
        );
        sessionStorage.setItem(
          "refreshToken",
          `Bearer ${response.data.refreshToken}`
        );
        // setAccount({ name: response.data.name, username: response.data.username }); // Uncomment if you have DataContext
        isUserAuthenticated(true);
        setLogin(loginInitialValues);
        navigate("/");
      } else {
        showError("Something went wrong! Please try again later");
      }
    } catch (error) {
      console.error("Login Error", error);
      showError("An unexpected error occurred. Please try again later.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
    console.log("Hello Abhi");
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={login.username}
              onChange={(e) => setLogin({ ...login, username: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={login.password}
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <Link to="/newpassword">
              <h1 className="text-indigo-500 hover:text-indigo-600 hover:underline md:font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Forgot password
              </h1>
            </Link>
          </div>

          <div className="flex justify-center">
            <div className="flex items-center">
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
