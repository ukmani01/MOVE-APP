import { useState } from "react";
import axios from "axios";
import "./Register.css"; // background & blur here
import { useNavigate } from "react-router-dom"
export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: "",
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", form);
      setMsg("Sign in successful!");
      setTimeout(() => navigate('/Login'), 1500)
      console.log(response.data);
    } catch (error) {
      setMsg("Sign in failed.");
      console.error(error);
    }
  };

  return (
    <>
      <div className="register-bg min-h-screen -mt-10 flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-center   justify-center my-10 text-center">
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
            Get started
          </button>
          <p className="mt-4 text-center text-green-400 font-semibold text-lg">
            ₹149 - Endless entertainment starting now!
          </p>

          {msg && <p className="mt-4 text-center text-red-400">{msg}</p>}
        </form>
      </div>


      <div class="flex flex-wrap gap-6 p-8 bg-black text-white justify-center">

        <div class="relative flex-1 min-w-[250px] p-6 rounded-2xl overflow-hidden border border-fuchsia-500/40 shadow-lg hover:scale-105 transition-transform">
          <div class="absolute inset-0 bg-gradient-to-r from-fuchsia-500/30 to-purple-700/30 blur-3xl rounded-2xl -z-10"></div>
          <h5 class="text-fuchsia-400 text-lg font-semibold mb-4">More Reason to join</h5>
          <h4 class="text-2xl font-bold mb-3">Enjoy on your TV</h4>
          <p class="text-sm max-w-md">
            Watch on Smart TVs, <span class="text-fuchsia-400">PlayStation</span>,
            <span class="text-fuchsia-400">Xbox</span>, Chromecast, Apple TV, Blu-ray Players and more
          </p>
        </div>

        <div class="relative flex-1 min-w-[250px] p-6 rounded-2xl overflow-hidden border border-purple-500/40 shadow-lg hover:scale-105 transition-transform">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-700/30 blur-3xl rounded-2xl -z-10"></div>
          <h5 class="text-purple-400 text-lg font-semibold mb-4">More Reason to join</h5>
          <h4 class="text-2xl font-bold mb-3">Stream Anywhere</h4>
          <p class="text-sm max-w-md">
            Watch instantly on mobile, tablet, laptop, and smart TVs — anytime, anywhere.
          </p>
        </div>

        <div class="relative flex-1 min-w-[250px] p-6 rounded-2xl overflow-hidden border border-pink-500/40 shadow-lg hover:scale-105 transition-transform">
          <div class="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-red-700/30 blur-3xl rounded-2xl -z-10"></div>
          <h5 class="text-pink-400 text-lg font-semibold mb-4">More Reason to join</h5>
          <h4 class="text-2xl font-bold mb-3">Download and Watch</h4>
          <p class="text-sm max-w-md">
            Save your favorite shows for offline viewing — enjoy entertainment on the go.
          </p>
        </div>

        <div class="relative flex-1 min-w-[250px] p-6 rounded-2xl overflow-hidden border border-red-500/40 shadow-lg hover:scale-105 transition-transform">
          <div class="absolute inset-0 bg-gradient-to-r from-red-500/30 to-orange-700/30 blur-3xl rounded-2xl -z-10"></div>
          <h5 class="text-red-400 text-lg font-semibold mb-4">More Reason to join</h5>
          <h4 class="text-2xl font-bold mb-3">Create Profiles</h4>
          <p class="text-sm max-w-md">
            Give each member their own space with personal recommendations and lists.
          </p>
        </div>

      </div>


      <footer className="bg-black from-gray-900 to-black text-center text-gray-400 px-6 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Call info */}
          <p className="text-sm">
            Questions? Call{" "}
            <a
              href="tel:0008009191743"
              className="text-white underline hover:text-fuchsia-400 transition"
            >
              000-800-919-1743
            </a>
          </p>

          {/* Footer grid links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
            <a href="#" className="hover:text-white transition">FAQ</a>
            <a href="#" className="hover:text-white transition">Help Centre</a>
            <a href="#" className="hover:text-white transition">Account</a>
            <a href="#" className="hover:text-white transition">Media Centre</a>
            <a href="#" className="hover:text-white transition">Investor Relations</a>
            <a href="#" className="hover:text-white transition">Jobs</a>
            <a href="#" className="hover:text-white transition">Ways to Watch</a>
            <a href="#" className="hover:text-white transition">Terms of Use</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Cookie Preferences</a>
            <a href="#" className="hover:text-white transition">Corporate Information</a>
            <a href="#" className="hover:text-white transition">Contact Us</a>
            <a href="#" className="hover:text-white transition">Speed Test</a>
            <a href="#" className="hover:text-white transition">Legal Notices</a>
            <a href="#" className="hover:text-white transition">Only on Netflix</a>
          </div>

          {/* Divider line */}
          <div className="border-t border-gray-700"></div>

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Netflix Clone. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">India · English</p>
          </div>
        </div>
      </footer>













    </>



  );
}
