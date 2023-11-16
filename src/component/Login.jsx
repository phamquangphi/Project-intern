import React, { useState } from "react";
import { PATH } from "../constant/config";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredentail = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredentail);
      const user = userCredentail.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center">
      <div className="max-w-[1000px]">
        <img src="/images/avatar.png" alt="" />
      </div>
      <div className="max-w-[500px]">
        <>
          <h1 className="text-4xl font-semibold leading-6">Create Account</h1>
          <form className="mt-7" onSubmit={handleSubmit}>
            <input
              className="w-[400px] border-b-2 hover:outline-none focus:outline-none "
              type="text"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="mt-[30px] w-[400px] border-b-2 hover:outline-none focus:outline-none"
              type="text"
              placeholder="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              type="submit"
              className="mt-[30px] w-[300px] h-[50px] bg-gradient-to-br from-pink-400 to-indigo-600 rounded-2xl text-[20px] font-medium text-white"
            >
              Create Account
            </button>
          </form>

          <p className="mt-[20px] text-[15px] font-normal leading-6">
            Allready have an account?
            <span
              onClick={() => {
                navigate(PATH.register);
              }}
              className="text-blue-600"
            >
              Register
            </span>
          </p>
        </>
      </div>
    </div>
  );
};

export default Login;
