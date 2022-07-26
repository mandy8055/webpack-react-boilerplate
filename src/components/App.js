// No need to import "react" just for JSX in React 17+
import React from "react";
import Recipes from "./Recipes";
import sword from "../images/swc-sword.png";
import swordSvg from "../images/sword.svg";

import "../styles/index.scss";

function App() {
  return (
    <>
      <section className="hero" />
      <main>
        <section>
          <h1>Oh Herro, React.</h1>
          <img src={sword} alt="sword" width="250" />
          <img src={swordSvg} alt="sword" width="250" />
          <Recipes />
        </section>
      </main>
    </>
  );
}

export default App;
