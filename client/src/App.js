import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings"
import Vote from "./pages/Vote";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import useResto from "../src/context/RestoContext";
import useUser from "../src/context/UserContext";

function App() {
  const { myResto, setMyResto } = useResto();
  const { myUser, setMyUser } = useUser();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {myResto || myUser ? (<>
            <Route path="/" element={<Home />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Pagenotfound />} />
          </>) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/vote" element={<Login />} />
              <Route path="/contact" element={<Login />} />
              <Route path="/menu" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/settings" element={<Login />} />
              <Route path="*" element={<Pagenotfound />} /></>
          )}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
