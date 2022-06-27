import "./Anouncements.css";

const Anouncements = ({ result, turn }) => {
  return (
    <div className="anouncements-container">
      <div className="anouncements">
        {result && result !== "Draw" && (
          <p>
            <span
              style={{
                fontWeight: 700,
                color: result === "X" ? "red" : "green",
                fontSize: 25,
              }}
            >
              {result}
            </span>{" "}
            wins the game
          </p>
        )}
        {result === "Draw" && <p>It's a Draw!</p>}
        {!result && <p>{turn}'s turn</p>}
      </div>
    </div>
  );
};

export default Anouncements;
