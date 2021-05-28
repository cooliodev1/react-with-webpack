import React from "react";
import Settings from "../components/Settings";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "../styles/IconRow.css";

const IconRow = () => {
  

  return (

    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/notifications">Notifications</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/notifications">
          <Notifications />
          <h1>test</h1>
        </Route>
        <Route path="/settings" component={Settings}>
        <Settings />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  </Router>

  );
};

function Home() {
  return <h2>Home</h2>;
}

function Calendar() {
  return <h2>Calendar</h2>;
}

// function Settings() {
//   return <h2>Settings</h2>;
// }

function Notifications() {
  return <h2>Notifications2</h2>;
}

function Profile() {
  return <h2>Profile</h2>;
}

export default IconRow;
