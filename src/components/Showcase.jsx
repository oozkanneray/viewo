import supabase from "../supabase";
import { useEffect, useState } from "react";
import Photo from "./Photo";
import UploadImage from "./UploadImage";

function Showcase({user}) {
  const [img, setImg] = useState([]);

  useEffect(() => { 
    showcaseImages()
  }, []);

  const showcaseImages = async () => {
    const { data, error } = await supabase.from("images").select("img,uploaded_display_name,uploaded_user_name");
    setImg(data); 
  };

  return (    
    <div className="flex flex-col items-center justify-center w-[100%]" >
      <UploadImage showcaseImages={showcaseImages} user={user}/>
      <div className="grid grid-cols-3 mb-20 gap-5">
        {img.map((item,index) => (
            <Photo key={index} img={item.img} username={item.uploaded_user_name} name={item.uploaded_display_name} />
        ))}
      </div>
    </div>
  );
}

export default Showcase;
