import { useState } from "react";
import "./App.css";

import RandomVerse from "./components/RandomVerse";
import GetBook from "./components/GetBook";

function App() {
  return (
    <>
      <section className="hero is-small is-primary mb-5">
        <div className="hero-body has-text-centered">
          <h2 className="is-1 fancy-title">Daily Verse</h2>
          <RandomVerse />
        </div>
      </section>
      <section className="container is-max-desktop mt-5 mb-5 is-clearfix read-bible">
        <div className="columns is-8">
          <div className="column">
            <h2 className="title is-3 is-left">Read your bible</h2>
          </div>
        </div>
        <GetBook />
      </section>
    </>
  );
}

export default App;
