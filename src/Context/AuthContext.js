import { useContext, useReducer } from "react";
import { createContext } from "react";
import AuthReducer from '../Reducer/AuthReducer'
const Context = createContext();
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, {
  user:false
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
export const useAuth = () => useContext(Context);
export default Provider;
