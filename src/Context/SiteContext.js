import { useContext, useReducer } from "react";
import { createContext } from "react";
import SiteReducer from "../Reducer/SiteReducer";
const Context = createContext();
const Provider = ({ children }) => {

  const [state, dispatch] = useReducer(SiteReducer, {
    theme: "light",
    language: "tr",
  });
  const data = {
    ...state,
    dispatch,
  };
  return (
    <>
      <Context.Provider value={data}>{children}</Context.Provider>
    </>
  );
};
export const useSite = () => useContext(Context);
export default Provider;
