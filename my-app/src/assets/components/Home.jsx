import React from "react";

export default function TamilMovies2025() {
    const tamilMovies = [
        {
            id: 1,
            title: "Leo",
            images: [
                " https://i.pinimg.com/736x/37/f0/59/37f05957164689f72fecf75077ee2353.jpg",
                "https://i.pinimg.com/736x/4c/01/92/4c01920fa78321cdc714b4a817ddfdf0.jpg",
                "https://i.pinimg.com/736x/d5/91/3d/d5913d8b09e696f4dc9caadd6263bddc.jpg"

            ],
            description:
                "A mysterious cafe owner with a dark past must face his enemies when violence returns to his life.",
        },
        {
            id: 2,
            title: "Jailer",
            images: [
                "https://i.pinimg.com/736x/89/43/59/89435908749662e4edd930d7208b5f3e.jpg",
                "https://i.pinimg.com/736x/93/81/ad/9381ad854d8c8b6bd33d496237e9d02d.jpg",
                "https://i.pinimg.com/736x/fc/cd/a7/fccda7502424ca62f5132730d895c9d3.jpg",

            ],
            description:
                "A retired jailer goes on a violent mission when his son, a cop, is kidnapped by a ruthless gangster.",
        },
        {
            id: 3,
            title: "Vikram",
            images: [
                "https://i.pinimg.com/736x/a3/a8/72/a3a872bedc6afe040e29f54cd19dc967.jpg",
                "https://i.pinimg.com/736x/83/72/da/8372da30db0bf65e0623d48694ff0b20.jpg",
                "https://i.pinimg.com/736x/6a/f6/1b/6af61b482bbf82993ba844dc94d94b12.jpg"
            ],
            description:
                "A special agent leads a covert operation to eliminate a drug syndicate in a city under siege.",
        },



        {
            id: 6,
            title: "Ponniyin Selvan: Part 1",
            images: [
                "https://image.tmdb.org/t/p/w500/mFkB9zU1JqHnYx6ReEcbQziEt8B.jpg",
                "https://i.pinimg.com/736x/6d/28/da/6d28da26abf5337c9683006c22e259af.jpg"
            ],
            description:
                "An epic tale of power, betrayal, and love set during the Chola dynasty’s golden age.",
        },


        {
            id: 9,
            title: "Vada Chennai",
            images: [
                "https://i.pinimg.com/736x/01/be/b7/01beb7a6d30dd230625a556692c889e5.jpg",
                " https://i.pinimg.com/736x/11/df/21/11df21b18ddab26251a94432107bf3fb.jpg",
                "https://i.pinimg.com/736x/68/02/a6/6802a61b91f183114a09099374fcc603.jpg"
            ],
            description:
                "A carrom player is drawn into the dark underworld of North Chennai and its violent politics.",
        },
        {
            id: 10,
            title: "Kaithi",
            images: [
                "https://i.pinimg.com/736x/8d/35/af/8d35af66400f11901a546283a1e96332.jpg",
                "https://i.pinimg.com/736x/ec/50/40/ec5040dceb32ba09fef79352cd2e5eb6.jpg",
                " https://i.pinimg.com/736x/43/0b/2a/430b2a650c854d55c94ff91728bab59e.jpg"
            ],
            description:
                "An ex-convict must save injured cops while trying to reunite with his daughter — all in one night.",
        },
        // 👉 You can continue similarly up to 20 movies
    ];

    return (
        <div className="p-5 bg-gray-900 text-white ">
            <h1 className="text-3xl font-bold mb-6 text-center">Top 20 Tamil Movies</h1>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10">
                {tamilMovies.map((movie) => (
                    <div
                        key={movie.id}
                        className="bg-gray-800 p-4 rounded-2xl shadow-lg hover:shadow-xl transition"
                    >
                        <h2 className="text-xl font-semibold mb-3">{movie.title}</h2>
                        <div className="flex gap-27 h-130 items-center gap-1 justify-center overflow-x-auto">
                            {movie.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={movie.title}
                                    className="w-100  h-100  object-cover   rounded-lg"
                                />
                            ))}
                        </div>
                        <p className="text-sm text-gray-300 mt-3">{movie.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
