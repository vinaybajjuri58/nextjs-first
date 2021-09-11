import { createContext, useContext, useReducer } from "react";
import { reducerFunction } from "./reducerFunction";
const DataContext = createContext();
const initialState = {
  counter: 0,
};
export const DataProvider = ({ children }) => {
  const [DataState, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <DataContext.Provider value={{ DataState, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
