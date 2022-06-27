import { useEffect, useState } from "react";
import "./TikTokToe.css";

const TikTokToe = ({ turn, setTurn, result, setResult }) => {
  const [fields, setFields] = useState(Array(9).fill(""));

  const play = (index) => {
    const field = fields[index];
    let newFields = fields.map((item, i) => (index === i ? turn : item));

    if (!field && !result) {
      setFields(newFields);
      whoWins(newFields);

      if (turn === "X") {
        setTurn("O");
      } else {
        setTurn("X");
      }
    }
  };

  const whoWins = (newFields) => {
    if (newFields[0]) {
      if (newFields[0] === newFields[1] && newFields[1] === newFields[2]) {
        setResult(newFields[0]);
      }
    }
    if (newFields[3]) {
      if (newFields[3] === newFields[4] && newFields[4] === newFields[5]) {
        setResult(newFields[3]);
      }
    }
    if (newFields[6]) {
      if (newFields[6] === newFields[7] && newFields[7] === newFields[8]) {
        setResult(newFields[6]);
      }
    }
    if (newFields[0]) {
      if (newFields[0] === newFields[3] && newFields[3] === newFields[6]) {
        setResult(newFields[0]);
      }
    }
    if (newFields[1]) {
      if (newFields[1] === newFields[4] && newFields[4] === newFields[7]) {
        setResult(newFields[1]);
      }
    }
    if (newFields[2]) {
      if (newFields[2] === newFields[5] && newFields[5] === newFields[8]) {
        setResult(newFields[2]);
      }
    }
    if (newFields[0]) {
      if (newFields[0] === newFields[4] && newFields[4] === newFields[8]) {
        setResult(newFields[0]);
      }
    }
    if (newFields[2]) {
      if (newFields[2] === newFields[4] && newFields[4] === newFields[6]) {
        setResult(newFields[2]);
      }
    }
  };

  useEffect(() => {
    if (!fields.includes("") && !result) {
      setResult("Draw");
    }
  }, [fields]);

  return (
    <div className="tik-tok-toe-container">
      <div className="tik-tok-toe">
        {fields.map((item, index) => (
          <div className="field" onClick={() => play(index)}>
            <span style={{ color: item === "X" ? "red" : "green" }}>
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TikTokToe;
