import React, { useState, useRef, useEffect } from "react";
import Controls from "./Controls";

import classes from "./Player.module.css";

function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <div className={classes.player}>
      <audio
        src={props.songs[props.currentSongIndex].src}
        ref={audioEl}
      ></audio>
      <h4 className={classes.heading}>Your favorite Music Player</h4>
      <div className={classes.songContainer}>
        <div>
          <img
            src={props.songs[props.currentSongIndex].img_src}
            alt=""
            className={classes.thumbnail}
          />
        </div>
        <div className={classes.songInfo}>
          <h3 className={classes.title}>
            {props.songs[props.currentSongIndex].title}
          </h3>
          <h4 className={classes.artist}>
            {props.songs[props.currentSongIndex].artist}
          </h4>
          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            SkipSong={SkipSong}
            id={props.currentSongIndex}
            songs={props.songs}
          />
          <p className={classes.nextSong}>
            Next up:{" "}
            <span>
              {props.songs[props.nextSongIndex].title} by{" "}
              {props.songs[props.nextSongIndex].artist}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Player;
