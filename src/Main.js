import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

const Main = () => {
  return (
    // HashRouter defines our routing region and provides the foundation for the navigation and browser history handling that routing is made up of.
    <HashRouter>
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/stuff">Stuff</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <div className="content">
              {/* The Route component takes in a path prop that tells it when the route will be active and the component to render */}
              <Route path="/" component={Home}/>
              <Route path="/stuff" component={Stuff}/>
              <Route path="/contact" component={Contact}/>
          </div>
        </ul>
      </div>
    </HashRouter>
  );
};

export default Main;
