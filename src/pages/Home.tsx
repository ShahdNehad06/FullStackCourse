import { useState } from "react";
import { Link } from "react-router-dom";
import { initialMovies } from "../movies";
import type { Movie } from "../types";

function Home() {
  const [movies, setMovies] = useState<Movie[]>(initialMovies);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  // get all the genres for the select
  const genres = ["All"];
  for (let i = 0; i < initialMovies.length; i++) {
    if (!genres.includes(initialMovies[i].genre)) {
      genres.push(initialMovies[i].genre);
    }
  }

  // filter movies by search and genre
  const filtered = movies.filter((movie) => {
    const titleOk = movie.title.toLowerCase().includes(search.toLowerCase());
    let genreOk = true;
    if (genre !== "All") {
      genreOk = movie.genre === genre;
    }
    return titleOk && genreOk;
  });

  function deleteMovie(id: number) {
    const newMovies = movies.filter((m) => m.id !== id);
    setMovies(newMovies);
  }

  return (
    <div className="container">
      <header className="navbar">
        <Link to="/" className="logo">
          Movie Explorer
        </Link>
        <span>Discover your next favorite</span>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">YOUR PERSONAL MOVIE LIBRARY</p>
          <h1>Find your next favorite movie.</h1>
          <p>Explore movies, discover stories, and find something to watch.</p>
        </section>

        <section className="movie-section">
          <h2>Explore Movies</h2>
          <p className="muted">{filtered.length} movies found</p>

          <div className="filters">
            <input
              type="text"
              placeholder="Search by movie title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
              {genres.map((g) => (
                <option key={g} value={g}>
                  {g === "All" ? "All Genres" : g}
                </option>
              ))}
            </select>
          </div>

          {filtered.length > 0 ? (
            <div className="movie-grid">
              {filtered.map((movie) => (
                <article className="movie-card" key={movie.id}>
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="poster"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />

                  <div className="movie-info">
                    <span className="genre">{movie.genre}</span>
                    <h3>{movie.title}</h3>
                    <p className="muted">
                      {movie.releaseYear} · ⭐ {movie.rating.toFixed(1)}
                    </p>

                    <div className="actions">
                      <Link to={"/movies/" + movie.id} className="details-btn">
                        View Details
                      </Link>
                      <button
                        className="delete-btn"
                        onClick={() => deleteMovie(movie.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No movies found</h3>
              <p>Try another title or select a different genre.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setGenre("All");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>
      </main>

      <footer className="footer">Movie Explorer · React + TypeScript</footer>
    </div>
  );
}

export default Home;
