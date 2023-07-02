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
    <section className="w-[100%] h-[100vh]">
      <div>
        test <br /> test <br />btets <br /> test
      </div>
      <Showcase user={user}/>
    </section>
  );
}

export default Main;
