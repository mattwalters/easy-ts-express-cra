import { useEffect, useState } from "react";
import logo from "./logo.svg";
import { map } from "lodash";
import "./App.css";

const ideas = ["idea 1", "idea 2", "idea 3"];

function App() {
  const [time, setTime] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/time");
      const json = await response.json();
      setTime(json.time);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          {map(ideas, (idea) => {
            return <div>{idea}</div>;
          })}
        </div>
        <p>The current time is {time}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
