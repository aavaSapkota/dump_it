import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import CameraPage from "./pages/CameraPage";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/camera" component={CameraPage} />
        <Route path="/result" component={ResultPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
