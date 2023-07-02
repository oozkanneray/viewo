import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import { useState } from "react";
import Profile from "./components/Profile";

function App() {

  const [user,setUser] = useState({})

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar user={user} />}>
          <Route index element={<Main user={user} />} />
          <Route path="login" element={<Signin setUser={setUser} />} />
          <Route path="register" element={<Signup />} />
        </Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
