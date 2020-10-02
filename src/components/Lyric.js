import React from "react";

function Lyric({ lyric }) {
  if (lyric.length === 0) {
    return null;
  }

  return (
    <div>
      <h2>Lyrics</h2>
      <p className="letra">{lyric}</p>
    </div>
  );
}

export default Lyric;
