import React, { useState, useEffect, useContext } from "react";
import NewSongList from "./NewSongList";
import SongContext from "./context/SongContext.js";

const SongList = () => {
  const [songs, dispatch] = useContext(SongContext);

  useEffect(() => {
    console.log("use effect hook ran", songs);
  });

  return (
    <div className="song-list">
      <ul>
        {songs.length == "" ? (
          songs.map(song => {
            return (
              <li key={song.id}>
                {song.title}
                <button
                  onclick={dispatch({ type: "REMOVE_SONG", id: song.id })}
                >
                  X
                </button>
              </li>
            );
          })
        ) : (
          <div>no records</div>
        )}
      </ul>
      <NewSongList addSongs={dispatch} />
    </div>
  );
};

export default SongList;
