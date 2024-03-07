import { useState } from 'react';

const movies = [
  {
    id: 1,
    name: 'Terminator',
  },
  {
    id: 2,
    name: 'Terminator2',
  },
  {
    id: 3,
    name: 'Terminator3',
  },
];

const MoviesList = () => {
  const [filter, setFilter] = useState('');

  return (
    <div>
      <input onChange={(e) => setFilter(e.target.value)} value={filter} />
      <ul>
        {movies
          .filter((movie) => {
            return movie.name.toLowerCase().includes(filter.toLowerCase());
          })
          .map((movie) => {
            return <li key={movie.id}>{movie.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default MoviesList;
