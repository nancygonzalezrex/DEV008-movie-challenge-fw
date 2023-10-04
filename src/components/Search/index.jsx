import { useState } from "react";
import "./Search.css";
import PropTypes from "prop-types";

const Search = ({ handleClickSearch }) => {
  const [input, setInput] = useState("");
  const handleChange = ({ target }) => {
    const { value } = target;
    console.log("value", value);
    setInput(value);
  };
  return (
    <div className="wrapper-search">
      <section className="buscador">
        <input
          onChange={handleChange}
          type="text"
          placeholder="peliculas.."
          id="input-busqueda-de-peliculas"
          value={input}
        />
        <button onClick={() => handleClickSearch(input)}> buscar </button>
        <img className="lupa" src="" alt="" />
      </section>
    </div>
  );
};
Search.propTypes = {
  handleClickSearch: PropTypes.func,
};

export default Search;
