import TikTokToe from "../TikTokToe/TikTokToe";
import "./App.css";
import { useEffect, useState } from "react";
import Anouncements from "../Anouncements/Anouncements";

function App() {
  const [turn, setTurn] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    let rand = Math.floor(Math.random() * 2);

    rand === 0 ? setTurn("O") : setTurn("X");
  }, []);

  return (
    <div className="App">
      <TikTokToe
        turn={turn}
        setTurn={setTurn}
        result={result}
        setResult={setResult}
      />
      <Anouncements result={result} turn={turn} />
    </div>
  );
}

export default App;
