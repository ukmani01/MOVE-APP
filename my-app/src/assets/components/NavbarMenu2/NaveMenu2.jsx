import { Link, useLocation } from "react-router-dom";
import "./NaveMenu.css";

export default function NaveMenu2() {
  const location = useLocation();

  const menuItems = [
    { name: "WATCH GUIDE", path: "/" },
    { name: "FAN FAVORITES", path: "/favorites" },
    { name: "MOST POPULAR", path: "/popular" },
    { name: "UPCOMING MOVIES", path: "/upcoming" },
    { name: "TOP RATED", path: "/top-rated" },
    { name: "TRENDING", path: "/trending" },
    { name: "NEW RELEASES", path: "/new-releases" },
    { name: "HOLLYWOOD", path: "/hollywood" },
    { name: "VIDEO STREAMING", path: "/video" } // video page
  ];

  return (
    <nav className="overflow-x-auto whitespace-nowrap py-4 px-4 bg-black">
      <ul className="flex gap-4">
        {menuItems.map((item, index) => {
          const isActive =
            item.path === "/video"
              ? location.pathname.startsWith("/video")
              : location.pathname === item.path;

          return (
            <li key={index}>
              <div
                className={`rounded-full shadow-md px-6 py-3 cursor-pointer transition-transform duration-300 hover:scale-105 ${isActive
                  ? "bg-blue-500 text-white shadow-xl"
                  : "bg-white text-black hover:shadow-xl"
                  }`}
              >
                <Link to={item.path} className="font-semibold">
                  {item.name}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
