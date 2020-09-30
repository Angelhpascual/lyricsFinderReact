import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import axios from "axios";
import Lyric from "./components/Lyric";
import Info from "./components/Info";

function App() {
  const [lyricSearch, setLyricSearch] = useState({});

  const [lyric, setLyric] = useState("");
  const [info, setInfo] = useState({});

  useEffect(() => {
    if (Object.keys(lyricSearch).length === 0) {
      return;
    }

    const apiLyricRequest = async () => {
      const { artist, song } = lyricSearch;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const [lyric, info] = await Promise.all([axios(url), axios(url2)]);

      setLyric(lyric.data.lyrics);
      setInfo(info.data.artists[0]);

      setLyricSearch({});
    };
    apiLyricRequest();
  }, [lyricSearch]);

  return (
    <Fragment>
      <Form setLyricSearch={setLyricSearch} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info} />
          </div>
          <div className="col-md-6">
            <Lyric lyric={lyric} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
