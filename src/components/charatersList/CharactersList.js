import { connect } from "react-redux";
import { useEffect } from "react";
import { Form } from "react-bootstrap";

// importing actions from redux/index file
import {
  fetchUsers,
  fetchUserFilms,
  fetchFilms,
  clearUserFilms,
  requestUserFilms,
} from "../../redux";

const CharactersList = ({
  userData,
  fetchUsers,
  fetchUserFilms,
  fetchFilms,
  clearUserFilms,
  requestUserFilms,
}) => {
  useEffect(() => {
    fetchUsers();
    fetchFilms();
  }, []);

  const characterChangeHandle = (e) => {
    const userName = e.target.value;
    if (userName === "-1") {
      clearUserFilms();
    } else {
      // dispatching request action
      requestUserFilms();

      //storing selected user data
      const getUserData = userData.users.results.filter(
        (user) => user.name === userName
      );
      const userFilms = getUserData.map((user) => user.films);

      //dispatching userfilms with an array of userfilms
      fetchUserFilms(userFilms);

      // if you want to wait for couple of seconds to dispatch uncomment the below code
      // setTimeout(() => {  fetchUserFilms(userFilms); }, 1000);
    }
  };

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <Form.Control as="select" onChange={characterChangeHandle} size="md" className="selectbox">
      <option value="-1">Choose Character</option>
      {userData &&
        userData.users &&
        userData.users.results &&
        userData.users.results.map((user) => (
          <option key={user.name}>{user.name}</option>
        ))}
    </Form.Control>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchFilms: () => dispatch(fetchFilms()),
    fetchUserFilms: (userFilms) => dispatch(fetchUserFilms(userFilms)),
    clearUserFilms: () => dispatch(clearUserFilms()),
    requestUserFilms: () => dispatch(requestUserFilms()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);
