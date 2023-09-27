import "./Search.css";
const Search = () => {
  return (
    <div className="wrapper-search">
      <section className="buscador">
        <input
          type="text"
          placeholder="buscar.."
          id="input-busqueda-de-peliculas"
        />
        <button> buscar </button>
        <img className="lupa" src="" alt="" />
      </section>
    </div>
  );
};

export default Search;
