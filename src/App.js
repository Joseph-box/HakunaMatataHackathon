import React from "react";
import "./App.css";
import Registration from "./pages/Registration";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App d-flex justify-content-center">
      <Router>
        <Route path="/" component={Registration} />
      </Router>
    </div>
  );
};

export default App;
