import SwitchLanguage from "../SwitchLanguage";
import SwitchTheme from "../SwitchTheme";
import { useAuth } from "../Context/AuthContext";
import { type } from "@testing-library/user-event/dist/type";
function Header() {
  const { user, dispatch } = useAuth();
  const logIn = () => {
    dispatch({
      type: "Log_In",
      value: {
        id: 1,
        name: "Rustem",
      },
    });
  };
  const logOut = () => {
    dispatch({
      type:'Log_Out',
      value:false
    }
    );
  };
  return (
    <header>
      header <br />
      <hr />
      {(user && <button onClick={logOut}>Log Out</button>) || (
        <button onClick={logIn}>Log In</button>
      )}
      <SwitchTheme /> <br />
      <SwitchLanguage />
    </header>
  );
}

export default Header;
