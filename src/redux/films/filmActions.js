import axios from "axios";
import {
  CLEAR_USER_FILMS,
  FETCH_FILMS_FAILURE,
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS,
  FETCH_USER_FILMS,
  REQUEST_USER_FILMS,
} from "./filmConstants";

export const fetchFilmsRequest = () => {
  return {
    type: FETCH_FILMS_REQUEST,
  };
};

export const fetchFilmsSuccess = (films) => {
  return {
    type: FETCH_FILMS_SUCCESS,
    payload: films,
  };
};

export const fetchFilmsFailure = (error) => {
  return {
    type: FETCH_FILMS_FAILURE,
    payload: error,
  };
};

export const fetchUserFilms = (films) => {
  return {
    type: FETCH_USER_FILMS,
    payload: films,
  };
};

export const clearUserFilms = () => {
  return {
    type: CLEAR_USER_FILMS,
    payload: [],
  };
};

export const requestUserFilms = () => {
  return {
    type: REQUEST_USER_FILMS,
  };
};

export const fetchFilms = () => {
  return (dispatch) => {
    dispatch(fetchFilmsRequest);
    axios
      .get("https://swapi.dev/api/films/")
      .then((response) => {
        const films = response.data;
        dispatch(fetchFilmsSuccess(films));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchFilmsFailure(errorMsg));
      });
  };
};
