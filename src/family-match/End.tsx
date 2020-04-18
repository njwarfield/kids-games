import * as React from "react";

export default function End() {
  return (
    <div className="gameOver">
      <p className="message">You Won!</p>
      <a href="/family-match">Play again?</a>
    </div>
  );
}
