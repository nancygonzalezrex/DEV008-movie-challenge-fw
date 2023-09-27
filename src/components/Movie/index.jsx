import "./Movie.css";
const Movie = (props) => {
  console.log("props", props);
  return (
    <div className="wrapper-movie">
      <img src={props.imagen} alt="" />
    </div>
  );
};

export default Movie;
