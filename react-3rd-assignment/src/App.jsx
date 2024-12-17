import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ResultsPage from "./components/ResultsPage";
import Home from "./Home/Home";
import RestaurantDetail from "./common/RestaurantDetail";
import Restaurant from "./common/Restaurant";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/places" element={<div />} />
        <Route path="/places/:id" element={<RestaurantDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
