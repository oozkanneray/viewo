import { useState } from "react";
import supabase from "../supabase";
import mountain from "../assets/mountain.jpeg";
import { useNavigate } from "react-router-dom";

function Signin({ setUser }) {
  const [email, setEmail] = useState();
  const [passowrd, setPassword] = useState();

  const navigate = useNavigate();

  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: passowrd,
    });
    if (!error) {
      navigate("/");
      setUser(data.user);
    }
  };

  return (
    <section>
      <div className="flex flex-col justify-center items-center w-[100%] h-[100vh] shadow-3xl">
        <div className="shadow-md shadow-black text-white rounded-xl bg-[rgb(20,20,20)] bac absolute">
          <form
            className="flex flex-col m-10"
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
          >
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
              Log In
            </button>
            <p>
              Don't you have an account? <button onClick={() => {navigate("/register")}} className="text-blue-700">Sign up</button>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signin;
