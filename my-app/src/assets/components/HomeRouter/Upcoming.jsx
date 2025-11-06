import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Upcoming = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("http://localhost:5000/videos");
        setVideos(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchVideos();
  }, []);

  if (!videos.length) return <p className="text-center mt-10">Loading...</p>;

  const featuredVideo = videos[0];
  const otherVideos = videos.slice(1, 4); // next 3 videos

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🎬 Upcoming Videos</h1>

      {/* Featured Video */}
      {featuredVideo && (
        <Link
          to="/video"
          state={{ video: featuredVideo }}
          className="block mb-6 cursor-pointer max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
        >
          <video className="w-full h-96 object-cover" src={featuredVideo.url} />
          <div className="p-4">
            <h2 className="font-bold text-2xl">{featuredVideo.name}</h2>
            <p className="text-gray-500 text-sm">Channel Name • 1.2M views • 2 days ago</p>
          </div>
        </Link>
      )}

      {/* 3 Videos below */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {otherVideos.map((video, index) => (
          <Link
            key={index}
            to="/video"
            state={{ video }}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition"
          >
            <video className="w-full h-48 object-cover" src={video.url} />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{video.name}</h2>
              <p className="text-gray-500 text-sm">Channel Name • 1.2M views • 2 days ago</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
