import React from 'react';
import requests from './requests';
import { instance } from './axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = React.useState([]);
  const [trailerUrl, setTrailerUrl] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(null);
    } else {
      movieTrailer(movie?.name || ' ')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          // console.log(url)
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className='row'>
      <h1 style={{ marginTop: '8px' }}>{title}</h1>
      <div className='row__posters'>
        {movies?.map((movie) =>
          movie.poster_path != null && movie.backdrop_path != null ? (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLarge && 'row__postersLarge'}`}
              src={`${base_url}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ) : null
        )}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
