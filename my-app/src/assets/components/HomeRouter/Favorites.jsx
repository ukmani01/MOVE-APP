import { useState, useEffect } from "react";
import axios from "axios";
//import './favorites.css'
export default function Favorites() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/move");
                setMovies(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchMovies();
    }, []);

    return (
        <div className="min-h-screen bg-[#0d0d0f] p-6 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center text-white mb-10">
                🎬 Tamil Movie Favorites
            </h1>

            <div className="flex flex-col gap-10 w-full max-w-6xl">
                {movies.map((movie, index) => (
                    <div
                        key={movie._id}
                        className="flex flex-col md:flex-row bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                        {/* Poster */}
                        <div className="w-full md:w-1/3 h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg relative">
                            <img
                                src={movie.image}
                                alt={movie.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 rounded-md text-sm font-bold">
                                ⭐ {movie.starRating?.toFixed(1)}
                            </div>
                            <div className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded-md text-sm font-semibold">
                                #{index + 1}
                            </div>
                        </div>

                        {/* Info */}
                        <div className="flex-1 p-6 flex flex-col justify-between text-white">
                            <div>
                                <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
                                <p className="text-gray-300 mb-2">
                                    {movie.year} • {movie.duration}
                                </p>
                                <p className="text-gray-400 mb-2 line-clamp-3">
                                    {movie.description}
                                </p>
                            </div>

                            <div className="mt-4">
                                <p className="text-gray-400 text-sm">
                                    🎬 Directed by: <span className="text-white">{movie.director}</span>
                                </p>
                                <p className="text-gray-400 text-sm mt-1">
                                    👥 Cast: {movie.cast?.join(", ")}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
