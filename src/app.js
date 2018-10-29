import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

/*
React class component
# Class components can be more 'powerful' than function components.
# Class components have access to component lifecycle methods for example.
*/
class App extends React.Component {
  handleTitleClick() {
    alert("you clicked the title");
  }

  // render() {
  //   return React.createElement("div", {}, [
  //     React.createElement(
  //       "h1",
  //       {
  //         onClick: this.handleTitleClick
  //       },
  //       "Adopt Me!"
  //     ),
  //     React.createElement(Pet, {
  //       name: "Luna",
  //       animal: "dog",
  //       breed: "havanese"
  //     }),
  //     React.createElement(Pet, {
  //       name: "Pepper",
  //       animal: "bird",
  //       breed: "Cockatiel"
  //     }),
  //     React.createElement(Pet, {
  //       name: "Doink",
  //       animal: "cat",
  //       breed: "mixed"
  //     })
  //   ]);
  // }

  render() {
    return (
      <div>
        <h1 onClick={this.handleTitleClick}>Adopt Me!</h1>
        <Pet name="Luna" animal="dog" breed="havanese" />
        <Pet name="Pepper" animal="bird" breed="Cockatiel" />
        <Pet name="Doin" animal="cat" breed="mixed" />
      </div>
    );
  }
}

// render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));
