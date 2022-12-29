//import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routecomponent/Home";
import MovieInfo from "./routecomponent/MovieInfo";
import reset from "./reset.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/movie/:id" element={<MovieInfo />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
