import React from "react";
import Pet from "./Pet";
import pf from "petfinder-client";
import SearchBox from "./SearchBox";
import { Consumer } from "./SearchContext";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

/*
React class component
# Class components can be more 'powerful' than function components.
# Class components have access to component lifecycle methods for example.
*/
class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
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

  componentDidMount() {
    this.search();
  }

  search = () => {
    petfinder.pet
      .find({
        output: "full",
        location: this.props.searchParams.location,
        animal: this.props.searchParams.animal,
        breed: this.props.searchParams.breed
      })
      .then(data => {
        let pets;
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }
        this.setState({ pets });
      });
  };

  render() {
    return (
      <div className="search">
        <SearchBox search={this.search} />
        {this.state.pets.map(pet => {
          let breed;
          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(", ");
          } else {
            breed = pet.breeds.breed;
          }
          return (
            <Pet
              key={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
              id={pet.id}
            />
          );
        })}
      </div>
    );
  }
}

export default function ResultsWithContext(props) {
  //Named function makes debugger from CallStack easier
  return (
    <Consumer>
      {context => <Results {...props} searchParams={context} />}
    </Consumer>
  );
}
