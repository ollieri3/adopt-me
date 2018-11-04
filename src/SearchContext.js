import React from "react";

const SearchContext = React.createContext({
  // This just describes what the data look like, useful for testing, a context should never be used without a provider above it (which will properly define the methods etc.)
  location: "Seattle, WA",
  animal: "",
  breed: "",
  breeds: [],
  handleAnimalChange() {},
  handleBreedChange() {},
  handleLocationChange() {},
  getBreeds() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
