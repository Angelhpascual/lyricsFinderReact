import React from "react";

function Info({ info }) {
  if (Object.keys(info).length === 0) {
    return null;
  }

  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Info Artist
      </div>
      <div className="card-body">
        <img src={info.strArtistThumb} alt="Artist Logo" />
      </div>
    </div>
  );
}

export default Info;
