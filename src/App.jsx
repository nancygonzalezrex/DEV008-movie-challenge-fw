import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Search from "./components/Search";
import "./App.css";
import MoviesList from "./components/MoviesList";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Search />
      <MoviesList />
    </>
  );
}

export default App;
