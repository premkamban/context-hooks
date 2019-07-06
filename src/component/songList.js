import React, { useState, useEffect } from "react";
import NewSongList from "./NewSongList";

const SongList = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: "Star Boy" },
    { id: 2, title: "Eminem: Not Afraid" },
    { id: 3, title: "Eminem: Till I collapse" },
    { id: 4, title: "Eminem: Lose yourself" }
  ]);

  useEffect(() => {
    console.log("use effect hook ran", songs);
  });

  const addSongs = title => {
    setSongs([...songs, { title, id: songs.length + 1 }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongList addSongs={addSongs} />
    </div>
  );
};

export default SongList;
