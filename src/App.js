import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { useContext } from "react"
import AuthContext from "./store/auth-context";

function App() {

  const authCtx = useContext(AuthContext);
  
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/signIn"></Redirect>
      </Route>

      
      {!authCtx.isLoggedIn && (
        <Route path="/signIn" exact>
          <SignIn />
        </Route>
      )}


      {/* Login directly if logged in */}
      <Route path="/signIn">
        {authCtx.isLoggedIn && <Redirect to="/dashboard" />}
        {!authCtx.isLoggedIn && <SignIn />}
      </Route>
      

      {!authCtx.isLoggedIn && (
        <Route path="/signUp">
          <SignUp />
        </Route>
      )}

      <Route path="/dashboard">
        {authCtx.isLoggedIn && <Dashboard />}
        {!authCtx.isLoggedIn && <Redirect to="/signIn" />}
      </Route>
      <Route path="*">
        <Redirect to="/signIn" />
      </Route>
      <SignUp />
    </Switch>
  );
}

export default App;
