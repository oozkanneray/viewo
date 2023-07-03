import { useEffect, useState } from "react";
import Showcase from "./Showcase.jsx";
import UploadImage from "./UploadImage";
import supabase from "../supabase.jsx";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Main({ user }) {

  const navigate = useNavigate()

  useEffect(() => {
    userData();
  }, []);

  const userData = async () => {
    const { data, error } = await supabase.auth.getUser();
  };

  return (
    <section className="pt-20 flex flex-col justify-center text-center">
      <div className="text-white my-10 flex flex-col items-center">
          <div className="flex flex-col items-center justify-center">
          <div className="welcome-text m-2 logo flex font-extrabold text-center mb-12 justify-center">
          Welcome to V<div className="text-blue-500">i</div>ewo
        </div>
        <div className="main-text">This is my website where I share the photos I take.</div>
        <div className="main-text">Other people can also share their photos.</div>
        <div className="main-text mt-5">You must be <button className="text-blue-500" onClick={() => {navigate("login")}}>Log In</button> to upload image.</div>
        <div className="flex justify-center items-center">
        <button className=" p-4 md:p-4 lg:p-4 xl:p-4 2xl:p-5  bg-blue-500 m-2 mt-5 rounded-lg text text-center hover:bg-blue-400 transition-colors border-blue-600 border-2">
          <a href="#showcase" className="">See Showcase</a>
        </button>
        <button onClick={() => {navigate("/login")}} className="bg-transparent border-2 border-[rgb(50,50,50)] p-5 m-2 mt-5 rounded-lg text text-center hover:bg-[rgb(50,50,50)] transition-colors hover:border-blue-500">
          Login
        </button>
        </div>
          </div>
      </div>
      <Showcase user={user} />
    </section>
  );
}

export default Main;
