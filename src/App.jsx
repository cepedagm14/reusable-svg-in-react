import logo from "./logo.svg";
import "./App.css";
import Logo from "./asset/icons/Logo";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Logo />
        <Logo color="#09122F" />
        <Logo color="#2f80ed" width="190" height="36" />
      </div>
    </div>
  );
}

export default App;
