import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Main from "./components/pages/Main";
import { PAGES } from "./constants";

const App = () => {
  const currentPage = useSelector((state) => state.store.currentPage);

  return <Router>{<Main />}</Router>;
};

export default App;
