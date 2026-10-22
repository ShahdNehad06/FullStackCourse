import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { initialMovies } from "../movies";
import type { Movie } from "../types";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const found = initialMovies.find((m) => m.id === Number(id));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMovie(found || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <main className="status">Loading movie details...</main>;
  }

  // movie not found
  if (!movie) {
    return (
      <main className="status">
        <h1>Oops!</h1>
        <p>Movie not found.</p>
        <button onClick={() => navigate("/")}>Back to Movies</button>
      </main>
    );
  }

  return (
    <div className="container">
      <header className="navbar">
        <Link to="/" className="logo">
          Movie Explorer
        </Link>
        <Link to="/">Home</Link>
      </header>

      <main className="details-page">
        <button className="back-btn" onClick={() => navigate("/")}>
          ⇽ Back to Movies
        </button>

        <section className="details-card">
          <img
            src={movie.poster}
            alt={movie.title}
            className="details-poster"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />

          <div className="details-info">
            <span className="genre">{movie.genre}</span>
            <h1>{movie.title}</h1>

            <p className="rating">★ {movie.rating.toFixed(1)} / 10</p>
            <p className="muted">Release Year: {movie.releaseYear}</p>

            <h2>About this movie</h2>
            <p className="description">{movie.description}</p>

            <p>
              <strong>Genre:</strong> {movie.genre}
            </p>
            <p>
              <strong>Release Year:</strong> {movie.releaseYear}
            </p>
            <p>
              <strong>Rating:</strong> {movie.rating.toFixed(1)} / 10
            </p>

            <button className="primary-btn" onClick={() => navigate("/")}>
              Back to Movies
            </button>
          </div>
        </section>
      </main>

      <footer className="footer">Movie Explorer · React + TypeScript</footer>
    </div>
  );
}

export default MovieDetails;
