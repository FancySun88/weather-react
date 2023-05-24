import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <form>
        <input
          type="search"
          placeholder="Please, type a city..."
          autocomplete="off"
        />

        <input type="submit" value="Get a forecast" />
      </form>
      <footer>
        Coded by I. Zhelezniak 2023
        <a href="https://github.com/FancySun88/weather-react">
          Open-source code
        </a>
      </footer>
    </div>
  );
}

export default App;
