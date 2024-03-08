import React, { useState } from 'react';
import movies from './moviesData'; // Import the movies array and the Movie interface

const MoviesList: React.FC = () => {
  const [filter, setFilter] = useState<string>('');

  return (
    <div className="video-grid">
      <input
        type="text"
        placeholder="Search movies..."
        className="search-input"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />
      {movies
        .filter((movie: Movie) =>
          movie.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((movie: Movie) => (
          <div className="video-card" key={movie.id}>
            <img
              src={movie.thumbnail}
              alt={movie.name}
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="video-info">
              <div className="video-title">{movie.name}</div>{' '}
              {/* Display movie name here */}
              {/* Additional movie information can go here */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default MoviesList;
