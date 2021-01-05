import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.scss";
import MainPage from "./pages/mainPage/MainPage";

const App = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
};

export default App;
