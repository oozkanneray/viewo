import { useEffect, useState } from "react";
import Showcase from "./Showcase.jsx";
import UploadImage from "./UploadImage";
import supabase from "../supabase.jsx";
import { useSearchParams } from "react-router-dom";

function Main({user}) {

  useEffect(() => {
    userData()
  }, []);

  const userData = async () => {  
    const {data,error} = await supabase.auth.getUser();
  };

  return (
    <section>
      <div className="text-white my-6 sm:my-12 flex flex-col justify-center items-center" id="showcase">
        <div className=" text-xl sm:text-4xl mb-2 test font-extrabold" >Showcase</div>
        <div className="line h-1"></div>
      </div>
      <Showcase user={user}/>
    </section>
  );
}

export default Main;
