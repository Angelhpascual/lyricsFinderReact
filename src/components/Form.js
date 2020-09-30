import React, { useState } from "react";

function Form({ setLyricSearch }) {
  const [search, setSearch] = useState({
    artist: "",
    song: "",
  });

  const [error, setError] = useState(false);

  const handleOnChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const { artist, song } = search;

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validate
    if (artist.trim() === "" || song.trim() === "") {
      setError(true);
      return;
    }
    //Back to initialState
    setError(false);

    setLyricSearch(search);
  };

  return (
    <div className="bg-info">
      {error ? (
        <p className="alert alert-danger text-center p-2">
          ** All the fields are obligatories **
        </p>
      ) : null}
      <div className="container">
        <div className="row">
          <form
            onSubmit={handleSubmit}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">Finder Lyrics y Songs</legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artist</label>
                    <input
                      onChange={handleOnChange}
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Type your artist..."
                      value={artist}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Songs</label>
                    <input
                      onChange={handleOnChange}
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Type your song..."
                      value={song}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Search
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
