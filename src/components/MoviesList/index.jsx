//hook useEffect permite definir efectos y useState para manejar el estado en la aplicacion
import { useEffect, useState } from "react";
import "./MoviesList.css";
import Movie from "../Movie";
import PropTypes from "prop-types";

//funcion MoviesList que es un componente funcional de reac
const MoviesList = ({ search }) => {
  //se declaran dos estado locales utilizando el hook useState
  //loading se utiliza para controlar si se esta cargando la informacion de las peliculas
  //inicialmente se establece true, lo que significa que la carga esta en curso
  //setLoading es una funcion que se esta utilizando para actualizar el estado de loading
  const [loading, setLoading] = useState(true);
  const [select, setSelect] = useState(null);
  //declara un estado data que se utilizara para almacenar la lista de peliculas despues que se obtenga de la API
  //inicialmente se establece como un arreglo vacio
  const [data, setData] = useState([]);
  const urlBase = "https://www.omdbapi.com/";
  const searchDetail = `s=${search}`;
  const apiKey = "apiKey=daa2c066";
  //url de solicitud completa concatenando la url base + parametro de busqueda + clave de la API
  const endpoint = `${urlBase}?${searchDetail}&${apiKey}`;
  //efecto secundario que se ejecutara cuando el componente se ejecute en el DOM
  //por eso el arreglo vacio como segundo argumento para que solo se ejecute una vez
  //este efecto realizara la solicitud de la api de OMDB para obtener la lista de peliculas
  useEffect(() => {
    // se está "borrando" o "reiniciando" el valor almacenado 
    setSelect(null);
    //para indicar que la aplicacion esta en proceso de carga 
    setLoading(true);
    //funcion fech para realizar una solicitud HTTP a la url de endpoint
    fetch(endpoint)
      //promesas para manejar las respuestas de la solicitud
      //cuando se recibe se convierte en formato JSON 
      // y se asigna a movie.Search que es la lista de peliculas
      .then((response) => response.json())
      .then((movie) => {
        setData(movie.Search);
        //se utiliza para indicar que la carga a terminado
        // y asi data se actualiza con la lista de peliculas
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [search]);

  // Esta función toma un parámetro data, que contiene información sobre las películas
  const handleClickMovie = (data) => {
    // Esta constante almacena la URL construida a partir de la información de las peliculas
    // La URL se forma utilizando la propiedad imdbID de data y una variable llamada apiKey
    // Esta URL se utiliza para hacer una solicitud a la API de IMDb y recuperar información sobre la película con el ID de IMDb proporcionado.
    const urlSelect = `http://www.omdbapi.com/?i=${data.imdbID}&plot=full&${apiKey}`;
    setLoading(true);
    // solicitud http
    fetch(urlSelect)
      //promesas para manejar las respuestas de la solicitud
      //cuando se recibe se convierte en formato JSON y se asigna a movie.Search que es la lista de peliculas
      .then((response) => response.json())
      .then((movie) => {
        setSelect(movie);
       
      })
      .catch((error) => console.log(error));

    setLoading(false);
  };
  return (
    <>
      {loading && (
        <div className="wrapper-loading">
          <span className="loader"></span>
        </div>
      )}
      {!select && !loading && (
        <div className="wrapper-movies-list">
          {/* itera atraves de la matriz data y para cada elemneto ejecuta el codigo entre las llaves 
          en este caso esta mapeando cada pelicula en el componente movie  */}
          {data.map((item, key) => {
            return (
              <div key={key} onClick={() => handleClickMovie(item)}>
                <Movie imagen={item.Poster} />
              </div>
            );
          })}
        </div>
      )}
      {select && !loading && (
        <div className="wrapper-movies-selected">
          <h2>{select.Title}</h2>
          <img src={select.Poster} alt="" />
          <p>{select.Plot}</p>
        </div>
      )}
    </>
  );
};
MoviesList.propTypes = {
  search: PropTypes.string,
};

export default MoviesList;
