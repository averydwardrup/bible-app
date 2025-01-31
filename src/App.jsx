// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import RandomVerse from "./components/RandomVerse";
import { IconBuildingChurch } from "@tabler/icons-react";

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
      <div>
        <IconBuildingChurch color="lightblue" size="64" />
      </div>
      <h1>Holy Bible App</h1>
      <div className="card">
        <RandomVerse />
      </div>
    </>
  );
}

export default App;
