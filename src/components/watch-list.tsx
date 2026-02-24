import { Film } from "@/src/types";
import { List } from "./list";

export const watchList: Film[] = [
    {
        id: 101,
        title: "Dune",
        release_date: "2021-10-22",
        overview:
            "A noble family becomes embroiled in a galactic war over the most valuable substance in the universe.",
        poster_path: "/dune.jpg",
        vote_average: 8.0,
        vote_count: 9500,
    },
    {
        id: 102,
        title: "Fight Club",
        release_date: "1999-10-15",
        overview:
            "An insomniac office worker forms an underground fight club that spirals into something far bigger.",
        poster_path: "/fight-club.jpg",
        vote_average: 8.4,
        vote_count: 28000,
    },
    {
        id: 103,
        title: "Interstellar",
        release_date: "2014-11-07",
        overview:
            "A team of explorers travel through a wormhole in space to ensure humanity’s survival.",
        poster_path: "/interstellar.jpg",
        vote_average: 8.6,
        vote_count: 33000,
    },
    {
        id: 104,
        title: "The Matrix",
        release_date: "1999-03-31",
        overview:
            "A hacker discovers reality is a simulation and joins a rebellion against its controllers.",
        poster_path: "/matrix.jpg",
        vote_average: 8.7,
        vote_count: 36000,
    },
    {
        id: 105,
        title: "Blade Runner 2049",
        release_date: "2017-10-06",
        overview:
            "A new blade runner unearths a long-buried secret that could plunge society into chaos.",
        poster_path: "/blade-runner-2049.jpg",
        vote_average: 8.0,
        vote_count: 17000,
    },
    {
        id: 106,
        title: "Parasite",
        release_date: "2019-10-11",
        overview:
            "A poor family schemes to become employed by a wealthy household—until everything shifts.",
        poster_path: "/parasite.jpg",
        vote_average: 8.5,
        vote_count: 21000,
    },
    {
        id: 107,
        title: "The Dark Knight",
        release_date: "2008-07-18",
        overview:
            "Batman faces the Joker, a criminal mastermind who pushes Gotham into anarchy.",
        poster_path: "/the-dark-knight.jpg",
        vote_average: 9.0,
        vote_count: 41000,
    },
    {
        id: 108,
        title: "Inception",
        release_date: "2010-07-16",
        overview:
            "A thief who steals secrets through dream-sharing takes on a final impossible job.",
        poster_path: "/inception.jpg",
        vote_average: 8.8,
        vote_count: 39000,
    },
    {
        id: 109,
        title: "Mad Max: Fury Road",
        release_date: "2015-05-15",
        overview:
            "In a desert wasteland, a drifter and a rebel flee a tyrant’s war party in a roaring chase.",
        poster_path: "/mad-max-fury-road.jpg",
        vote_average: 8.1,
        vote_count: 25000,
    },
    {
        id: 110,
        title: "Whiplash",
        release_date: "2014-10-10",
        overview:
            "A young drummer’s ambition collides with a ruthless instructor’s brutal methods.",
        poster_path: "/whiplash.jpg",
        vote_average: 8.5,
        vote_count: 19000,
    },
    // пара сериалов (чтобы протестить name/first_air_date)
    {
        id: 201,
        name: "Dark",
        first_air_date: "2017-12-01",
        overview:
            "A missing child sets four families on a time-bending mystery spanning generations.",
        poster_path: "/dark.jpg",
        vote_average: 8.8,
        vote_count: 12000,
    },
    {
        id: 202,
        name: "Breaking Bad",
        first_air_date: "2008-01-20",
        overview:
            "A chemistry teacher turns to manufacturing meth to secure his family’s future.",
        poster_path: "/breaking-bad.jpg",
        vote_average: 9.2,
        vote_count: 22000,
    },
];

export const WatchList = () => {

    return (
        <div className="relative mx-auto max-w-3xl px-1 py-2 sm:px-1  max-h-[70vh] overflow-y-auto">
            {watchList.length > 0 ? (<List items={watchList} />
            ) : (
                <div className="rounded-2xl border border-white/10 bg-white/3 p-6 text-sm text-zinc-300 backdrop-blur-xl">

                    Your watchlist is empty. Start adding movies and series to your
                    watchlist by searching for them and clicking the{" "}
                    <span className="text-zinc-50">Add to Watchlist</span> button on
                    their details page.

                </div>
            )}
        </div>
    );
};
