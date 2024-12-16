import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ResultsPage from "./components/ResultsPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<dev />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
