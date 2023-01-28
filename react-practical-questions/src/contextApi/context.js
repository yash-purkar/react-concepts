import React from "react";
export const myContext = React.createContext();
export const Provider = myContext.Provider;
export const Consumer = myContext.Consumer;

// context provide a way to pass a data through the component tree without having to pass props down manually every level.
// To avoid the prop drilling problem , we use context Api.

// If we want to use context Api , we have to import createContext from React.

// There are 2 things in context
// 1. Provider and 2. Consumer
// Provider passes the values.
// Consumer receive that values.