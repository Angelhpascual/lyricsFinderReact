import React from "react";

function Lyric({ lyric }) {
  return (
    <div>
      <h2>Lyric of the song</h2>
      <p className="letra">{lyric}</p>
    </div>
  );
}

export default Lyric;
