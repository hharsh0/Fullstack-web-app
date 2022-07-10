import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/signIn"></Redirect>
      </Route>
      <Route path="/signIn" exact>
        <SignIn />
      </Route>
      <Route path="/signUp">
        <SignUp/>
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <SignUp />
    </Switch>
  );
}

export default App;
