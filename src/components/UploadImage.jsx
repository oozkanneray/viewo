import supabase from "../supabase";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function UploadImage({ user,showcaseImages }) {
  const [file, setFile] = useState([]);

  const handleFileSelected = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const generateID = uuidv4();

    const { error } = await supabase.storage
      .from("photos")
      .upload(generateID, file);

    await addImage(generateID);
    showcaseImages()

  };
  
  const addImage = async (photoID) => {
    const { error } = await supabase.from("images").insert({
      userID: user.id,
      img: photoID,
      uploaded_display_name: user.user_metadata.display_name,
      uploaded_user_name: user.user_metadata.user_name,
    });
  };

  if (Object.keys(user).length !== 0)
    return (
      <div className="flex justify-center m-10">
        <form
          className="shadow-inner shadow-black/20 p-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <label
            htmlFor="upload_image"
            className="inline-block p-5 cursor-pointer bg-blue-500 text-xl text-white ml-5"
          >
            Upload Image
          </label>
          <input
            type="file"
            name="image"
            id="upload_image"
            accept="image/*"
            onChange={handleFileSelected}
          />
          <button
            type="submit"
            className="ml-5 text-white"
          >
            Upload image
          </button>
        </form>
      </div>
    );
}

export default UploadImage;
