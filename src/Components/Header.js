import SwitchLanguage from "../SwitchLanguage";
import SwitchTheme from "../SwitchTheme";

function Header() {
  return (
    <>
      header <br />
      <SwitchTheme />  <br/>
      <SwitchLanguage />
    </>
  );
}

export default Header;
