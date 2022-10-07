import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const MoviesList = ({ filmsData }) => {
  const [latestMovie, setLatestMovie] = useState("");

  //Storing all films data
  const films = filmsData.films.results;

  //Storing all userfilms data
  const userFilmsArray = filmsData.userFilms;
  const userFilmsArrayMerged = [].concat.apply([], userFilmsArray);

  //Filtering and mapping matched url results
  const userFilmsDataArray = userFilmsArrayMerged.map((url) => {
    return films.filter((film) => film.url === url);
  });
  const userFilmsData = [].concat.apply([], userFilmsDataArray);

  useEffect(() => {
    if (!userFilmsData.length) {
      setLatestMovie("");
    } else {
      const latestMovieArray = userFilmsData.reduce((a, b) =>
        a.release_date > b.release_date ? a : b
      );
      setLatestMovie(
        `${latestMovieArray["title"]} / ${latestMovieArray["release_date"]}`
      );
    }
  }, [userFilmsData]);

  return !userFilmsData.length ? (
    <h4>Please Select a Character</h4>
  ) : filmsData.loading ? (
    <h2>Loading</h2>
  ) : filmsData.error ? (
    <h2>{filmsData.error}</h2>
  ) : (
    <>
      <Form.Control as="select" size="md" className="selectbox">
        {userFilmsData &&
          userFilmsData.map((userfilmdata) => (
            <option key={userfilmdata.title}>{userfilmdata.title}</option>
          ))}
      </Form.Control>

      <h4>
        <span className="h4_title">Latest Movie/Year </span>
        {latestMovie}
      </h4>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    filmsData: state.films,
  };
};

export default connect(mapStateToProps)(MoviesList);
