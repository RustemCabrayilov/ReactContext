import Home from "./Home";
import SiteContext from "./Context/SiteContext";
import AuthContext from "./Context/AuthContext";

function App() {
  return (
    <SiteContext>
      <AuthContext>
        <Home />
      </AuthContext>
    </SiteContext>
  );
}

export default App;
