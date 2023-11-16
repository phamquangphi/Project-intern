import React from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../constant/config";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export const Home = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate(PATH.login);
  };

  return (
    <>
      <div className="my-[62px] mx-[56px]">
        <header>
          <div className="flex items-center justify-around">
            <div className="flex items-center">
              <img src="/images/logo.png" alt="" />
              <h1 className="text-[#5a5e89] text-4xl font-bold not-italic ml-[35px]">
                XYZ
              </h1>
            </div>
            <div className="Nav-Link flex">
              <p className="text-[#010851] text-xl font-semibold not-italic mr-[79px] ">
                {" "}
                Overview
              </p>
              <p
                className="text-[#010851] text-xl font-semibold not-italic mr-[79px] "
                hr
              >
                {" "}
                Feature
              </p>
              <p className="text-[#010851] text-xl font-semibold not-italic mr-[79px] ">
                {" "}
                About
              </p>
              <p className="text-[#010851] text-xl font-semibold not-italic ">
                {" "}
                Pricing
              </p>
            </div>
            <div className="Sign-up">
              <button
                onClick={handleLogout}
                className="w-[95px] h-[46px] bg-[#9A7AF1] text-[#010851] text-xl font-bold not-italic rounded-xl hover:bg-[rgb(189,177,224)]"
              >
                Sign up
              </button>
            </div>
          </div>
        </header>
        <section className="mt-[50px]">
          <div className="h-[500px] rounded-3xl bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
            <div className="flex pt-[79px] px-[42px]">
              {/* TITLE */}
              <div className="max-w-[1100px] ">
                <h1 className="text-white text-[70px] font-bold leading-[1]">
                  Develop your skills <br /> without diligence
                </h1>
                <p className="text-[#EBEBEB] text-[20px] font-medium pt-[43px]">
                  A good example of a paragraph contains a topic sentence,
                  details and a <br />
                  conclusion. There are many different kinds of animals that
                  live in China
                </p>
                {/* BUTTON */}
                <div className="mt-[42px] flex items-center">
                  <button className="text-white text-[20px] font-bold  bg-[#9A7AF1] w-[150px] h-[70px] rounded">
                    Get Started
                  </button>
                  <button className="text-white text-[20px] font-bold  bg-[#9A7AF1] w-[150px] h-[70px] rounded ml-[36px]">
                    Discount
                  </button>
                </div>
              </div>
              {/* avatar */}
              <div className="max-w-[500px]"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
