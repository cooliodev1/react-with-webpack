import React from "react";
import Settings from "../components/Settings";
import Home from "../components/Home";
import Notifications from "../components/Notifications";
import Profile from "../components/Profile";
import Calendar from "../components/Calendar";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import "../styles/IconRow.css";

const IconRow = () => {
  return (
    <Router>

      
    <Route path="/home" component={Home}></Route>
    <Route path="/calendar" component={Calendar}></Route>
    <Route path="/notifications" component={Notifications}></Route>
    <Route path="/settings" component={Settings}></Route>
    <Route path="/profile" component={Profile}></Route>

<div className="floating-div">
  <ul className="nav-menu">
    
    <li className="menu-parent">
      <Link to="/home">
        <img className="icon-img" src={"https://assets.codepen.io/2599843/home.svg"}/>
        <p>Home</p>
      </Link>
    </li>    
    
    <li className="menu-parent">
      <Link to="/settings">
        <img className="icon-img" src={"https://assets.codepen.io/2599843/settings.svg"}/>
        <p>Settings</p>
      </Link>
    </li>
    
    <li className="menu-parent">
      <Link to="/calendar">
        <img className="icon-img" src={"https://assets.codepen.io/2599843/calendar.svg"}/>
        <p>Calendar</p>
      </Link>
    </li>
    
    <li className="menu-parent">
      <Link to="/notifications">
        <img className="icon-img" src={"https://assets.codepen.io/2599843/notifications.svg"}/>
        <p>Notifications</p>
      </Link>
    </li>
    
    <li className="menu-parent">
      <Link to="/profile">
        <div className="icon-img"/>
        <p>Profile</p>
      </Link>
    </li>
    
  </ul>
</div>
      
  </Router>

  );
};

// function Home() {
//   return <h2>Home</h2>;
// }

// function Calendar() {
//   return <h2>Calendar</h2>;
// }

// function Settings() {
//   return <h2>Settings</h2>;
// }

// function Notifications() {
//   return <h2>Notifications2</h2>;
// }

// function Profile() {
//   return <h2>Profile</h2>;
// }

export default IconRow;
