import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, signUp } from "../store/features/authSlice";

const AuthPage = () => {
    const dispatch = useDispatch();

  const [user, setUser] = React.useState<{
    username: string,
    email: string, 
    password: string
  }>({
    username: "",
    email: "",
    password: ""
  });

  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

  const handleValueChange = (e: any) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

    const { kind } = useParams();

    const login = kind === "login";
    const navigate = useNavigate();

    const handleFormSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (login) {

        } else {

        }
        //implement login or SignUp Functionality
        navigate("/dashboard",{replace: true})
    }

  return (
    <div className="flex w-full flex-wrap px-5 justify-center lg:justify-between space-y-5 max-w-5xl mx-auto items-center h-[80vh]">
      <div>
        <h2 className="text-5xl font-light text-center w-full">
          {login ? "Login" : "SignUp"} Page
        </h2>
      </div>
      <form
        onSubmit={handleFormSubmit}
        className="max-w-xl bg-gray-200 py-8 px-8 space-y-8 rounded-md"
      >
        <input
          placeholder="Enter username"
          type="text"
          name="username"
          value={user.username}
          onChange={handleValueChange}
          className="w-full text-xl h-14 rounded px-4 focus:outline-none focus:shadow-outline"
        />
        {!login && (
          <input
            placeholder="Enter your Email"
            name="email"
            value={user.email}
            onChange={handleValueChange}
            type="email"
            className="w-full text-xl h-14 rounded px-4 focus:outline-none focus:shadow-outline"
          />
        )}
        <input
          placeholder="Enter your Password"
          type="text"
          name="password"
          value={user.password}
          onChange={handleValueChange}
          className="w-full text-xl h-14 rounded px-4 focus:outline-none focus:shadow-outline"
        />
        {!login && (<input
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e)=>{setConfirmPassword(e.target.value)}}
            type="text"
            className="w-full text-xl h-14 rounded px-4 focus:outline-none focus:shadow-outline"
        />)}
        <button
          type="submit"
          className="w-full bg-blue-500 text-xl rounded py-3 mt-3 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AuthPage;
