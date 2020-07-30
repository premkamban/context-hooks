import React, { useEffect, useContext } from "react";
import NewSongList from "./NewSongList";
import SongContext from "../context/SongContext";


const SongList = () => {
  const [songs, dispatch] = useContext(SongContext);

  useEffect(() => {
    console.log("use effect hook ran", songs);
  }, [songs]);

  return (
    <div className="song-list">
      <ul>
        {console.log("song list" + songs)}
        {songs.length === "" ? (

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
