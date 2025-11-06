import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarMenu.css";
export default function NavbarMenu() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="navbar-container">
      <div className="nav-logo">
        <h1 class="text-5xl sm:text-6xl font-extrabold text-red-600 tracking-wide uppercase drop-shadow-[0_0_25px_rgba(255,0,0,0.8)] text-center">
          JETFLEX
        </h1>

      </div>

      <button
        className={`menu-toggle ${menu ? "active" : ""}`}
        onClick={() => setMenu(!menu)}
      >
        ☰
      </button>

      <nav className={`nav-links ${menu ? "show" : ""}`}>
        <ul>
          <li><Link to="/">new relis</Link></li>
          <li><Link to="/about">subscription</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
}
