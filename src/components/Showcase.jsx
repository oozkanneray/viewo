import supabase from "../supabase";
import { useEffect, useState } from "react";
import Photo from "./Photo";
import UploadImage from "./UploadImage";

function Showcase({ user }) {
  const [img, setImg] = useState([]);

  useEffect(() => {
    showcaseImages();
  }, []);


  const showcaseImages = async () => {
    const { data, error } = await supabase
      .from("images")
      .select("img,uploaded_display_name,uploaded_user_name");
    setImg(data);
  };

  return (
    <div className="flex flex-col w-full justify-center items-center mt-64">
      <div
        className="text-white my-4 sm:my-8 flex flex-col justify-center items-center"
        id="showcase"
      >
        <div className=" text-xl sm:text-4xl mb-2 test font-extrabold">
          Showcase
        </div>
        <div className="bg-gradient-to-r from-transparent via-white to-transparent h-1 w-full"></div>
      </div>
      <UploadImage showcaseImages={showcaseImages} user={user} />
      <div className="grid grid-cols-3 mb-20 gap-2">
        {img.map((item, index) => (
          <Photo
            key={index}
            img={item.img}
            username={item.uploaded_user_name}
            name={item.uploaded_display_name}
          />
        ))}
      </div>
    </div>
  );
}

export default Showcase;
