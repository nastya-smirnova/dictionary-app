
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Pocket Dictionary
        </h1>
        <input 
        type="text"
        placeholder="Type your word"
        className="form-control-sm border-0 px-2 col-md-3 col-sm-4"
        id="Type your word"
        id="floatingInput"
          />
        <button type="button" class="btn btn-primary">Search</button>
      </header>
      <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Type A Word In The Box
        </a>
        <div class="body">
        <div>
          <p><h1>Word with audio:</h1></p>
          <p>Word here</p>
        </div>
        <div>
          <p><h3>Meaning & Definition:</h3></p>
          <p>Meaning & Definition here</p>

        </div>
        <div>
          <p><h3>Examples:</h3></p>
          <p>Examples here</p>

        </div>
        <div>
          <p><h3>Synonyms:</h3></p>
          <p>Synonyms here</p>

        </div>
        <div>
          <p><h3>Antonyms:</h3></p>
          <p>Antonyms here</p>
        </div>
    </div>
    </div>
  );
}

export default App;
