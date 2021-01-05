import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";

import "./MainPage.css";
import CharacterList from "../../components/charatersList/CharactersList";
import MoviesList from "../../components/moviesList/MoviesList";

const MainPage = ({ filmsData }) => {
  return (
    <div className="mainpage_div">
      {filmsData.loadingUserFilms ? (
        <Spinner animation="border" variant="light" />
      ) : (
        <>
          <CharacterList />
          <MoviesList />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filmsData: state.films,
  };
};

export default connect(mapStateToProps)(MainPage);
