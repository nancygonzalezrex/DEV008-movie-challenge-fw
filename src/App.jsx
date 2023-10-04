import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Search from "./components/Search";
import "./App.css";
import MoviesList from "./components/MoviesList";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("marvel");
  const handleClickSearch = (data) => {
    console.log("data", data);
    setSearch(data);
  };
  return (
    <>
      <Header />
      <Welcome />
      <Search handleClickSearch={handleClickSearch} />
      <MoviesList search={search} />
    </>
  );
}

export default App;
