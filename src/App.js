import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={require("./images/tapestryLogo.jpeg")}
          style={{ width: "10em" }}
          alt="logo"
        />
        Congratulations!
      </header>
    </div>
  );
}

export default App;
