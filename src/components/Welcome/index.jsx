import "./Welcome.css";
const Welcome = () => {
  return (
    <div className="wrapper-welcome">
      <div className="wrapper-detail">
        <div className="saludo">¡Bienvenid@s!</div>
        <p className="parrafo">Descubre y Busca Tus Películas Favoritas </p>
      </div>
      <div className="wrapper-img">
      <img
        className="img-pop-corn"
        src="https://www.candypop.cl/wp-content/uploads/2018/02/palomitas-de-ma%C3%ADz-candypop-1024x814.png"
        alt=""
      />
      </div>
    </div>
  );
};

export default Welcome;
