import { useEffect, useState } from "react";
import "./MoviesList.css";
import Movie from "../Movie";

const MoviesList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading && (
        <div className="wrapper-loading">
          <div className="lds-heart">
            <div></div>
          </div>
        </div>
      )}
      <div className="wrapper-movies-list">
        {!loading &&
          data.map((item) => {
            return (
              <>
                <Movie imagen={item.image} />
              </>
            );
          })}
      </div>
    </>
  );
};

export default MoviesList;
