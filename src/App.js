import "./App.css";

function App() {
  // const [value, setValue] = useState("");

  // const handleInputChange = (e) => setValue(e.target.value);

  // const handleSubmit = () => {}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pocket Dictionary</h1>
        <div class="search_align">
          <input
            type="text"
            placeholder="Type your word"
            className="form-control-sm border-0 px-2 col-md-3 col-sm-6"
            id="Type your word"
            // onChange={handleInputChange}
            // id="floatingInput"
          />
          <button
            className="btn"
            type="button"
            class="btn btn-primary btn-sm"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </header>
      <a className="App-link" target="_blank" rel="noopener noreferrer">
        Type A Word In The Box
      </a>
      <div class="body">
        <div>
          <p>
            <h1>Word with audio:</h1>
          </p>
          <p>Word here</p>
        </div>
        <div>
          <p>
            <h3>Meaning & Definition:</h3>
          </p>
          <p>Meaning & Definition here</p>
        </div>
        <div>
          <p>
            <h3>Examples:</h3>
          </p>
          <p>Examples here</p>
        </div>
        <div>
          <p>
            <h3>Synonyms:</h3>
          </p>
          <p>Synonyms here</p>
        </div>
        <div>
          <p>
            <h3>Antonyms:</h3>
          </p>
          <p>Antonyms here</p>
        </div>
      </div>
    </div>
  );
}

export default App;
