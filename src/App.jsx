import React from "react";

import { createContext, useState } from "react";
import Header from "./components/Header";

import "./App.css";

//Create context
export const inputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  const value = {
    inputValue,
    setInputValue,
  };

  return (
    <inputContext.Provider value={value}>
      <div classNaame="App">
        <div className="App-header">
          <Header />
        </div>
      </div>
    </inputContext.Provider>
  );
}

export default App;
