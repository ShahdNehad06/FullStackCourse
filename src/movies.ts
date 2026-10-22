import type { Movie } from "./types";
import inception from "./assets/Inception.jpg";
import interstellar from "./assets/Interstellar.jpg";
import darkKnight from "./assets/The-Dark-Knight.jpg";
import titanic from "./assets/Titanic.jpg";

// the movies we show in the app
export const initialMovies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    description: "A thief enters people's dreams to steal and plant ideas.",
    poster: inception,
    releaseYear: 2010,
    rating: 8.8,
  },
  {
    id: 2,
    title: "Interstellar",
    genre: "Sci-Fi",
    description:
      "Explorers travel through space to find a new home for humanity.",
    poster: interstellar,
    releaseYear: 2014,
    rating: 8.7,
  },
  {
    id: 3,
    title: "The Dark Knight",
    genre: "Action",
    description: "Batman faces the Joker, who threatens Gotham City.",
    poster: darkKnight,
    releaseYear: 2008,
    rating: 9.0,
  },
  {
    id: 4,
    title: "Titanic",
    genre: "Romance",
    description: "Two passengers fall in love aboard the Titanic.",
    poster: titanic,
    releaseYear: 1997,
    rating: 7.9,
  },
];
