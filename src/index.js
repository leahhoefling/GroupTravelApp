import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./index.css";
// import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import GroupTravelApp from "./GroupTravelApp";

ReactDOM.render(
  <Router>
    <GroupTravelApp />
  </Router>,
  document.querySelector("#root")
);

// ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
