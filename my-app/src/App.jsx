import { Routes, Route, useLocation } from "react-router-dom";
import NavbarMenu from "./assets/NavbarMenu/NavbarMenu.jsx";
import NaveMenu2 from "./assets/components/NavbarMenu2/NaveMenu2.jsx";

import Home from "./assets/components/Home.jsx";
import Hoollywood from "./assets/components/HomeRouter/Hoollywood.jsx";
import Favorites from "./assets/components/HomeRouter/Favorites.jsx";
import Popular from "./assets/components/HomeRouter/Popular.jsx";
import Upcoming from "./assets/components/HomeRouter/Upcoming.jsx";
import Watchguid from "./assets/components/HomeRouter/Watchguid.jsx";
import Login from "./assets/components/Login.jsx";
import Register from "./assets/components/Register.jsx";

// Video streaming page
import VideoPage from "./assets/components/VideoPage.jsx";

import "./App.css";

export default function App() {
  const location = useLocation();

  const hideNavbarMenu2 =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="app-container">
      <NavbarMenu />
      {!hideNavbarMenu2 && <NaveMenu2 />}

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Home />} />
        <Route path="/hollywood" element={<Hoollywood />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/watchguide" element={<Watchguid />} />

        {/* Video Streaming Route */}
        <Route path="/video" element={<VideoPage />} />
      </Routes>
    </div>
  );
}
