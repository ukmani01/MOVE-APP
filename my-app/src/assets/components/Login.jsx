import { useState } from "react";
import axios from "axios";
import "./Login.css"; // background & blur here

export default function Login() {
  const [form, setForm] = useState({
    email: "",
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/Login",
        form
      );
      setMsg("Sign in successful!");
      console.log(response.data);
    } catch (error) {
      setMsg("Sign in failed.");
      console.error(error);
    }
  };

  return (
    <div className="register-bg min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center justify-center my-10 text-center">
          <h1 className="relative font-extrabold tracking-widest uppercase select-none">
            <span className="text-red-600 text-8xl drop-shadow-[0_0_25px_rgba(255,0,0,0.9)] animate-pulse">
              J
            </span>
            <span className="text-white text-6xl mx-2 drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">
              FILM
            </span>
          </h1>

          <h2
            className="mt-3 text-3xl font-semibold text-white tracking-widest 
            [text-shadow:_0_0_10px_rgba(255,0,0,0.6),_0_0_20px_rgba(255,255,255,0.8)] 
            animate-pulse"
          >
            THE <span className="text-red-500">APP</span>
          </h2>
        </div>

        {/* ✅ Only One Input */}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your Email"
          className="w-full px-6 py-4 mb-6 text-white placeholder-gray-400 bg-gray-800 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 text-lg [box-shadow:inset_0_1px_3px_rgba(0_0_0_/_0.6)]"
          required
        />

        <button
          type="submit"
          className="w-full py-3 mt-2 font-bold text-white bg-red-600 rounded-full text-lg shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 [box-shadow:inset_0_1px_3px_rgba(0_0_0_/_0.5),0_0_15px_rgba(255_0_0_/_0.4)] transition-all duration-300"
        >
          Sign in
        </button>
        <p className="mt-4 text-center text-green-400 font-semibold text-lg">
          ₹149 - Endless entertainment starting now!
        </p>

        {msg && <p className="mt-4 text-center text-red-400">{msg}</p>}
      </form>
    </div>
  );
}
