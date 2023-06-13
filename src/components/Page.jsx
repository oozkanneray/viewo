import { useEffect, useState } from "react";
import supabase from "../supabase";
import { v4 as uuidv4 } from "uuid";
import Login from "./Login";

export default function Page() {
  const [file, setfile] = useState([]);
  const [img,setImg] = useState([])
  const [user,setUser] = useState()

  useEffect(() => {
    signedUser()
    dowlandPhoto()
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const {data,error} = await supabase.storage.from("photos").upload(user + "/" + uuidv4(),file)
  };

  const signedUser = async () => {
    const {data,error}=  await supabase.auth.getUser()
    setUser(data.user.id)
  }

  const handleFileSelected = (e) => {
    setfile(e.target.files[0]);
  };

  const dowlandPhoto = async () => {
    const { data, error } = await supabase
  .storage
  .from('photos')
  .list(user + "/", {
    limit: 100,
    offset: 0,
    sortBy: { column: "name", order: "asc"}
  })
    setImg(data)
  }

  const userSignOut = async() => {
    const {error}  = await supabase.auth.signOut()

    }

  if(user){
    return (
      <>
            <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" onChange={handleFileSelected} />
        <button type="submit">Upload image</button>
        {/* {img.map(item => <div>{"https://vfjtskojmdtpcadkjizo.supabase.co/storage/v1/object/public/photos/" + user + "/" + item.name}</div>)} */}
        {img.map(item => <img className="img" src={"https://vfjtskojmdtpcadkjizo.supabase.co/storage/v1/object/public/photos/" + user + "/" + item.name}/>)}
        <button onClick={userSignOut}> Log Out</button>
      </form>
      <button onClick={dowlandPhoto}>TEST</button>
      </>)
  } else return (
    <Login/>
  )
}