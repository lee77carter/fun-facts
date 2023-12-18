import React, { useState, useEffect } from "react";
import { facts } from "./facts";

const App = () => {
  const [index, setIndex] = useState(0);
  const [showName, setShowName] = useState(false);

  const nextFact = () => {
    setShowName(false);
    index === facts.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  useEffect(() => {
    console.log("Running useEffect");
    const factDelay = setTimeout(() => {
      console.log("in Timeout function");
      setShowName(true);
    }, 2000);

    return () => {
      clearTimeout(factDelay);
    };
  }, [showName]);

  return (
    <div className="App">
      {facts && (
        <article>
          <p>{facts[index].fact}</p>
          {showName && <h1>{facts[index].name}</h1>}
          <button className="fetch-fact" onClick={nextFact}>
            Next fact
          </button>
        </article>
      )}
    </div>
  );
};

export default App;
