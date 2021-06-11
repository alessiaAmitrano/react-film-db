import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Searchbar from "./components/SearchBar";
import Results from "./pages/Results";
import Layout from "./ui/Layout";

const CONFIG_URL =
  "https://api.themoviedb.org/3/configuration?api_key=15dd194f094bd6f3b0bc7ca34b69a718";
const GET_FILMS_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=15dd194f094bd6f3b0bc7ca34b69a718&query=";

const ROUTES = {
  DEFAULT: "/",
  RESULTS: "/results",
};

function App() {
  const [films, setFilms] = useState([]);
  const [queryString, setQueryString] = useState("");
  const history = useHistory();

  function fetchMovies(query) {
    fetch(`${GET_FILMS_URL}${query}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFilms(data.results);
        setQueryString(query);
        history.replace("/results");
      });
  }

  useEffect(() => {
    fetch(CONFIG_URL).then((response) => {
      window["TMDBConfig"] = response.json();
    });
  }, []);

  return (
    <Layout>
      <Switch>
        <Route path={ROUTES.DEFAULT} exact>
          <Searchbar searchMovies={fetchMovies} />
        </Route>
        <Route path={ROUTES.RESULTS}>
          <Results queryText={queryString} filmItems={films} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
