import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz";
import Hypotenuse from "./components/Hypotenuse";
import IsTriangle from "./components/IsTriangle";
import Area from "./components/Area";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/is-triangle" element={<IsTriangle />}></Route>
          <Route path="/hypotenuse" element={<Hypotenuse />}></Route>
          <Route path="/area" element={<Area />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
