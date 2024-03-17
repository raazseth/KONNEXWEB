import React, { useRef, useState } from "react";
import drake from "../Assets/Images/drakeBhai.jpg";
import moment from "moment";
import dummy from "../Assets/dummy.mp3";
import { FaForward, FaBackward, FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { Slider } from "@mui/material";

const MusicPlayer = () => {
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
      };
    
      const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
      };
    
      const handleSliderChange = (event, newValue) => {
        audioRef.current.currentTime = (newValue / 100) * duration;
      };
    
      const formatTime = (seconds) => {
        const format = (val) => `0${Math.floor(val)}`.slice(-2);
        const minutes = (seconds / 60) | 0;
        const secs = seconds % 60;
        return `${format(minutes)}:${format(secs)}`;
      };
    
      const handleAudio = () => {
        if (audioRef.current.paused) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      };
    
  return (
   
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          color: "#fff",
          marginRight: "20px",
        }}
      >
        <div
          style={{
            width: "200px",
            height: "200px",
            position: "relative",
          }}
        >
          <img
            src={drake}
            alt="drake"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "20%",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <FaBackward
                style={{
                  fontSize: "24px",
                  color: "white",
                  cursor: "pointer",
                  marginRight: "10%",
                }}
              />
              {!audioRef.current?.paused ? (
                <FaPause
                  style={{
                    fontSize: "24px",
                    color: "white",
                    cursor: "pointer",
                    margin: "0 0",
                  }}
                  onClick={handleAudio}
                />
              ) : (
                <FaPlay
                  style={{
                    fontSize: "24px",
                    color: "white",
                    cursor: "pointer",
                    margin: "0 0",
                  }}
                  onClick={handleAudio}
                />
              )}
              <FaForward
                style={{
                  fontSize: "24px",
                  color: "white",
                  cursor: "pointer",
                  marginLeft: "10%",
                }}
              />
            </div>
          </div>
        </div>
        <audio
          ref={audioRef}
          autoPlay
          loop
          muted
          style={{
            display: "none",
          }}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        >
          <source src={dummy} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div
          style={{
            margin: "0 10px",
            display: "flex",
            flexDirection: "column",
            width: "240px",
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            Creepin'
          </h3>
          <p
            style={{
              opacity: "0.6",
              fontSize: "14px",
              marginTop: "4px",
            }}
          >
            Drake
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "auto",
              marginBottom: "2em",
              opacity: "0.6",
              fontSize: "14px",
            }}
          >
            <p> {formatTime(currentTime)}</p>
            <Slider
              value={(currentTime / duration) * 100}
              onChange={handleSliderChange}
              aria-label="Custom slider"
              size="small"
              style={{
                margin: "-4px 10px",
              }}
            />{" "}
            <p style={{ marginLeft: "4px" }}> {formatTime(duration)}</p>
          </div>
        </div>
      </div>
     );
};

export default MusicPlayer;
