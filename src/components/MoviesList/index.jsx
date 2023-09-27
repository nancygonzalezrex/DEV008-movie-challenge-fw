//hook useEffect permite definir efectos y useState para manejar el estado y useEffect
import { useEffect, useState } from "react";
import "./MoviesList.css";
import Movie from "../Movie";

const MoviesList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const urlBase = "https://www.omdbapi.com/";
  const search = "s=marvel";
  const apiKey = "apiKey=daa2c066";
  const endpoint = `${urlBase}?${search}&${apiKey}`;
  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((movie) => {
        setData(movie.Search);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {loading && (
        <div className="wrapper-loading">
          <span className="loader"></span>
        </div>
      )}
      {!loading && (
        <div className="wrapper-movies-list">
          {data.map((item) => {
            return (
              <>
                <Movie imagen={item.Poster} />
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default MoviesList;
