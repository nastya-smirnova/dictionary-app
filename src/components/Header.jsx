import React from "react";
import { inputContext } from "../App";
import { useContext, useState } from "react";

const Header = () => {
  const [value, setValue] = useState("");

  const { inputValue, setInputValue } = useContext(inputContext);
  console.log(value);

  const handleInputChange = (e) => setValue(e.target.value);

  const handleSubmit = () => {
    setInputValue(value);
    setValue("");
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      setInputValue(value);
      setValue("");
    }
  };

  return (
    <div className="bg-gray-700">
      <div className="container text-center mx-auto py-8">
        <h1 classNaame="text-3xl text-center font-bold text-white">
          Pocket Dictionary
        </h1>
        <div className="flex items-center justify-center mt-5">
          <div className="search_align">
            {/* <div className="flex border-2 border-gray-200 rounded"> */}
            <input
              className="px-4 py-2 md:w-80"
              type="text"
              placeholder="Search..."
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
            ></input>
            <div>
              <button
                className="btn"
                type="button"
                class="btn btn-primary btn-lg"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <p className="find-definition">Find definition for word:</p>
      </div>
    </div>
  );

  // <div className="App">
  //   <header className="App-header">
  //     <h1>Pocket Dictionary</h1>
  //     <div class="search_align">
  //       <input
  //         type="text"
  //         placeholder="Type your word"
  //         className="form-control-sm border-0 px-2 col-md-3 col-sm-6"
  //         id="Type your word"
  //         onChange={handleInputChange}
  //         // id="floatingInput"
  //       />
  //       <button
  //         className="btn"
  //         type="button"
  //         class="btn btn-primary btn-sm"
  //         onClick={handleSubmit}
  //       >
  //         Search
  //       </button>
  //     </div>
  //   </header>
  //   <a className="App-link" target="_blank" rel="noopener noreferrer">
  //     Type A Word In The Box
  //   </a>
  // </div>;
};

export default Header;
