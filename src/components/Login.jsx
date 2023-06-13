import { useState } from "react";
import supabase from "../supabase";

function Login() {


    const [email,setEmail] = useState()

    async function magicLinkLogin() {
        const { data, error } = await supabase.auth.signInWithOtp({
          email: email
        });
    
        if(error) {
          alert("Error communicating with supabase, make sure to use a real email address!");
          console.log(error);
        } else {
          alert("Check your email for a Supabase Magic Link to log in!");
        }
      }

    return ( 
        <div>
            <form>
                <input type="email" onChange={(e) => (setEmail(e.target.value))}/>
                {email}
            <button onClick={magicLinkLogin}> Log In</button>

            </form>
        </div>
     );
}

export default Login;