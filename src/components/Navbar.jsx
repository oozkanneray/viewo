import { Outlet, Link, useNavigate } from "react-router-dom";
import supabase from "../supabase";

function Navbar({ user }) {
  const navigate = useNavigate();

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    } else {
      navigate("/");
      window.location.reload(false);
    }
  };

  return (
    <>
      <nav className="text-white h-16 fixed w-full items-center flex justify-around z-30 bg-black  bg-opacity-40 shadow-lg backdrop-blur-md">
        <div className="font-knewave  text-2xl sm:text-4xl font-extrabold italic">
          <Link to="/ ">
            V<span className="text-blue-500">i</span>ewo
          </Link>
        </div>
        {Object.keys(user).length !== 0 ? (
          <ul className="flex text-xl">
            <button onClick={logout}>
              <li className="ml-10">Logout</li>
            </button>
          </ul>
        ) : (
          <ul className="flex text-xl">
            <Link to="login">
              <li className="ml-10">Login</li>
            </Link>
            <Link to="register">
              <li className="ml-10">Register</li>
            </Link>
          </ul>
        )}
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
