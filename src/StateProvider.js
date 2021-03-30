import { createContext, useContext, useReducer } from "react";

// Creamos el contexto en el cual podemos pasar las variables de un componente a otro
export const StateContext = createContext();

// StateProvider provee la herramienta para pasar los datos
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// useStateValue es el que permite consumir los cambios de estado desde cualquier componente
export const useStateValue = () => useContext(StateContext);
