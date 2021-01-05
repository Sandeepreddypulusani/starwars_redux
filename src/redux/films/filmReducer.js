import {
  CLEAR_USER_FILMS,
  FETCH_FILMS_FAILURE,
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS,
  FETCH_USER_FILMS,
  REQUEST_USER_FILMS,
} from "./filmConstants";

const initialState = {
  loading: false,
  films: [],
  userFilms: [],
  loadingUserFilms: false,
  error: "",
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FILMS_SUCCESS:
      return {
        ...state,
        loading: false,
        films: action.payload,
        error: "",
      };
    case FETCH_FILMS_FAILURE:
      return {
        ...state,
        loading: false,
        films: [],
        error: action.payload,
      };
      case REQUEST_USER_FILMS:
      return {
        ...state,
        loadingUserFilms: true,
      };
    case FETCH_USER_FILMS:
      return {
        ...state,
        userFilms: action.payload,
        loadingUserFilms: false,
      };
      case CLEAR_USER_FILMS:
      return {
        ...state,
        userFilms: action.payload,
        loadingUserFilms: false,
      };
    default:
      return state;
  }
};

export default filmsReducer;
