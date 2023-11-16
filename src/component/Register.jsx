import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { PATH } from "../constant/config";
import { auth } from "../firebase";

export const Register = () => {
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
      navigate(PATH.login);
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
          <h1 className="text-4xl font-semibold leading-6">Register</h1>
          <form className="mt-7" onSubmit={handleSubmit}>
            <input
              className="w-[400px] mt-[30px] border-b-2 hover:outline-none focus:outline-none "
              type="email"
              placeholder="your Email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="mt-[30px] w-[400px] border-b-2 hover:outline-none focus:outline-none"
              type="password"
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
              Create Register
            </button>
          </form>
        </>
      </div>
    </div>
  );
};

export default Register;
