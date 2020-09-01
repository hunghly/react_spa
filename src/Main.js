import React from "react";

const Main = () => {
  return (
    <div>
      <h1>Simple SPA</h1>
      <ul className="header">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/stuff">Stuff</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <div className="content">

        </div>
      </ul>
    </div>
  );
};

export default Main;