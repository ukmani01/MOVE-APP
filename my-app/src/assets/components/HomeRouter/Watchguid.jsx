
export default function Watchguid() {
    const movies = [
        {
            id: 1,
            title: "Inception",
            image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
            description: "A thief who steals corporate secrets through dream-sharing technology."
        },
        {
            id: 2,
            title: "The Dark Knight",
            image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
            description: "Batman faces the Joker, a criminal mastermind who wants to create chaos."
        },
        {
            id: 3,
            title: "Interstellar",
            image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
            description: "A team of explorers travel through a wormhole in space in an attempt to save humanity."
        },
        {
            id: 4,
            title: "Avengers: Endgame",
            image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
            description: "The Avengers assemble once more to reverse Thanos' actions and restore balance."
        },
        {
            id: 5,
            title: "Parasite",
            image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
            description: "A poor family schemes to become employed by a wealthy family, leading to unexpected consequences."
        },
        {
            id: 6,
            title: "Joker",
            image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
            description: "A failed comedian descends into madness and becomes the infamous Joker."
        },
        {
            id: 7,
            title: "The Lion King",
            image: "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
            description: "A young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery."
        },
        {
            id: 8,
            title: "Frozen II",
            image: "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
            description: "Elsa and Anna embark on a journey beyond their kingdom to discover the origin of Elsa's powers."
        },
        {
            id: 9,
            title: "Toy Story 4",
            image: "https://image.tmdb.org/t/p/w500/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg",
            description: "Woody and the gang embark on a road trip adventure with a new toy named Forky."
        },
        {
            id: 10,
            title: "Spider-Man: Into the Spider-Verse",
            image: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
            description: "Teenager Miles Morales becomes Spider-Man in his universe and meets other Spider-People."
        },
        {
            id: 11,
            title: "Avengers: Infinity War",
            image: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
            description: "The Avengers and their allies must stop Thanos from collecting all Infinity Stones."
        },
        {
            id: 12,
            title: "The Matrix",
            image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
            description: "A hacker learns the shocking truth about his reality and his role in the war against its controllers."
        },
        {
            id: 13,
            title: "Forrest Gump",
            image: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
            description: "The life journey of Forrest Gump, a man with a kind heart and simple mind, unfolds in a remarkable way."
        },
        {
            id: 14,
            title: "The Godfather",
            image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
            description: "The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son."
        },
        {
            id: 15,
            title: "Pulp Fiction",
            image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
            description: "The lives of two mob hitmen, a boxer, and a gangster's wife intertwine in four tales of violence and redemption."
        },
        {
            id: 16,
            title: "The Shawshank Redemption",
            image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
            description: "Two imprisoned men bond over years, finding solace and eventual redemption through acts of common decency."
        },
        {
            id: 17,
            title: "Gladiator",
            image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
            description: "A former Roman General seeks revenge against the corrupt emperor who murdered his family."
        },
        {
            id: 18,
            title: "Titanic",
            image: "https://image.tmdb.org/t/p/w500/kHXEpyfl6zqn8a6YuozZUujufXf.jpg",
            description: "A young couple falls in love aboard the ill-fated RMS Titanic."
        },
        {
            id: 19,
            title: "Jurassic Park",
            image: "https://image.tmdb.org/t/p/w500/c414cDeQ9b6qLPLeKmiJuLDUREJ.jpg",
            description: "Scientists clone dinosaurs to populate a theme park, but chaos ensues when they escape."
        },
        {
            id: 20,
            title: "Star Wars: A New Hope",
            image: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
            description: "Luke Skywalker joins forces with a Jedi Knight to save the galaxy from the Empire's world-destroying battle station."
        }
    ];
    return (
        <><div>
            {movies.map((item, key) => (
                <div key={key}>
                    <img src={item.image} />
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>


        </>
    )
}
