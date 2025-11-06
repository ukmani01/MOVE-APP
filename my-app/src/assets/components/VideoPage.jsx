import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const VideoPage = () => {
  const location = useLocation();
  const initialVideo = location.state?.video;
  const navigate = useNavigate();

  const [allVideos, setAllVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(initialVideo);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [subscribed, setSubscribed] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const videoRefs = useRef([]); // ✅ store refs for related videos

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("http://localhost:5000/videos");
        setAllVideos(res.data);
        if (!currentVideo && res.data.length > 0) setCurrentVideo(res.data[0]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchVideos();
  }, []);

  // Reset stats when new video selected
  useEffect(() => {
    setLikes(0);
    setDislikes(0);
    setComment("");
    setComments([]);
    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ scroll to top when switching video
  }, [currentVideo]);

  // Scroll event to show "Top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!currentVideo) {
    return (
      <div className="p-6 text-center">
        <h2>Video not found</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment.trim()]);
      setComment("");
    }
  };

  const relatedVideos = allVideos
    .filter((v) => v.name !== currentVideo.name)
    .slice(0, 4);

  // 🧠 Functions for hover preview
  const handleMouseEnter = (index) => {
    const vid = videoRefs.current[index];
    if (vid) {
      vid.currentTime = 0;
      vid.muted = true;
      vid.play();
    }
  };

  const handleMouseLeave = (index) => {
    const vid = videoRefs.current[index];
    if (vid) {
      vid.pause();
      vid.currentTime = 0;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
      {/* Main Video */}
      <video
        className="w-full max-w-4xl mb-4 rounded-lg shadow-md"
        src={currentVideo.url}
        controls
        autoPlay
      />

      {/* Video Info */}
      <div className="max-w-4xl w-full p-4 bg-white rounded-lg shadow-md">
        <h2 className="font-bold text-2xl">{currentVideo.name}</h2>
        <p className="text-gray-500">Channel Name • 1.2M views • 2 days ago</p>

        {/* Actions */}
        <div className="mt-4 flex gap-4 flex-wrap">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            onClick={() => setLikes(likes + 1)}
          >
            👍 Like {likes}
          </button>
          <button
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
            onClick={() => setDislikes(dislikes + 1)}
          >
            👎 Dislike {dislikes}
          </button>
          <button
            className={`px-4 py-2 rounded transition ${
              subscribed
                ? "bg-gray-300"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            onClick={() => setSubscribed(!subscribed)}
          >
            {subscribed ? "Subscribed" : "Subscribe"}
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            💬 Feedback
          </button>
        </div>

        {/* Comments */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Comments</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="flex-1 p-2 border rounded"
            />
            <button
              onClick={handleAddComment}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Post
            </button>
          </div>
          <div className="mt-4 space-y-2">
            {comments.map((cmt, idx) => (
              <div key={idx} className="p-2 bg-gray-100 rounded">
                {cmt}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Videos */}
      <div className="max-w-4xl w-full mt-8">
        <h3 className="font-bold text-xl mb-4">More Videos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {relatedVideos.map((v, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition"
              onClick={() => setCurrentVideo(v)}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                className="w-full h-48 object-cover"
                src={v.url}
              />
              <div className="p-4">
                <h4 className="font-semibold">{v.name}</h4>
                <p className="text-gray-500 text-sm">
                  Channel Name • 1.2M views
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          ⬆️ Top
        </button>
      )}
    </div>
  );
};

export default VideoPage;
