import logo from "./logo.svg";
import Confetti from "react-confetti";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Confetti />
        <img
          src={require("./images/tapestryLogo.jpeg")}
          style={{ width: "10em" }}
          alt="logo"
        />
        <div>Congratulations!!!</div>
        <div>You've successfully completed 3rd day training workshop with CE</div>
      </header>
    </div>
  );
}

export default App;
