import "./Movie.css";
const Movie = (props) => {
  return (
    <div className="wrapper-movie">
      <img src={props.imagen} alt="" />
    </div>
  );
};

export default Movie;
