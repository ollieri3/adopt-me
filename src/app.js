import React from "react";
import { render } from "react-dom";
import Results from "./Results";
import Details from "./Details";
import { Router } from "@reach/router";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
