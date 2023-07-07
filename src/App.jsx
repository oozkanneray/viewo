import Navbar from "./components/Navbar";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Pages/Signin";
import { useState } from "react";

function App() {

  const [user,setUser] = useState({})

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar user={user} />}>
          <Route index element={<Home user={user} />} />
          <Route path="login" element={<Signin setUser={setUser} />} />
          <Route path="register" element={<Signup />} />
        </Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
