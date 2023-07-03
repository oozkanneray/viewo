import { useRef, useState } from "react";
import supabase from "../supabase";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState();
  const [passowrd, setPassword] = useState();

  const userNameRef = useRef()
  const displayNameRef = useRef()

  async function signup() {
    const { user, session, error } = await supabase.auth.signUp({
      email: email,
      password: passowrd,
      options: {
        data: {
          display_name: displayNameRef.current.value,
          user_name: userNameRef.current.value
        },
      },
    });

    if (error) {
      alert(
        "Error communicating with supabase, make sure to use a real email address!"
      );
      console.log(error);
    } else {
      alert("Check your email for a Supabase Magic Link to log in!");
    }
    console.log(session);
  }

  return (
    <section>
      <div className="flex flex-col justify-center items-center w-[100%] h-[100vh] shadow-3xl">
        <div className="shadow-md shadow-black text-white rounded-xl bg-[rgb(20,20,20)] bac absolute">
          <form
            className="flex flex-col m-10"
            onSubmit={(e) => {
              e.preventDefault();
              signup( )
            }}
          >
            <div className="m-2 flex flex-col">
              <label className="label" htmlFor="name">
                Name
              </label>  
              <input
                ref={displayNameRef}
                name="name"
                className="input"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                autoComplete="off"
              ></input>
              
            </div>
            <div className="m-2 flex flex-col">
              <label className="label" htmlFor="username">
                User Name
              </label>
              <input
              ref={userNameRef}
                name="username"
                className="input"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                autoComplete="off"
              ></input>
            </div>
            <div className="m-2 flex flex-col">
              <label className="label" htmlFor="email">
                E-Mail
              </label>
              <input
                name="email"
                className="input"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                autoComplete="off"
              ></input>
            </div>
            <div className="m-2 flex flex-col">
              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                name="password"
                className="input"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
              ></input>
            </div>
            <button className="p-3 text-white  bg-blue-500 m-5 rounded-xl text-xl">
              Register
            </button>
            <p>
              You have already account <button onClick={() => {navigate("/login")}} className="text-blue-700">Log in</button>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
