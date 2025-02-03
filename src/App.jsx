// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import RandomVerse from "./components/RandomVerse";
import GetBook from "./components/GetBook";

function App() {
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <section className="hero is-medium is-primary mb-5">
        <div className="hero-body is-centered">
          <h2 className="is-1 title mt-3">Daily Verse</h2>
          <RandomVerse />
        </div>
      </section>
      <section className="container is-max-desktop mt-5 mb-5 is-clearfix">
        <h2 className="title is-2 is-left">Read the bible</h2>
        <GetBook />
      </section>
    </>
  );
}

export default App;
