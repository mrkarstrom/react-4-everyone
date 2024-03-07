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
  return (
    <div>
      <ul>
        {movies.map((movie) => {
          return <li key={movie.id}>{movie.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default MoviesList;
