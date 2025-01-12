import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FAQPage from "./pages/FAQPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FAQPage />} />
      </Routes>
    </Router>
  );
};

export default App;
