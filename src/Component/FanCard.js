import React from 'react'
import fan from "../Assets/Icons/fan.png";

const FanCard = ({handleChangeFanSpeed,data,fanSpeed}) => {
  return (
    <div
    style={{
      backgroundColor: "transparent",
      padding: "10px",
      height: "80px",
      width: "350px",
      borderRadius: "12px",
      backdropFilter: "blur(12px)",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      color: "#fff",
    }}
  >
    <img
      src={fan}
      alt="fan"
      style={{
        height: "40px",
        width: "40px",
        objectFit: "contain",
        marginRight: "10px",
      }}
    />
    <div>
      <h3
        style={{
          fontSize: "20px",
          fontWeight: "normal",
          fontWeight: "600",
        }}
      >
        Fan
      </h3>
      <h4
        style={{
          fontWeight: "normal",
          fontSize: "13.5px",
          opacity: "0.6",
        }}
      >
        Orient Smart Fan
      </h4>
    </div>

    <span
      style={{
        color: "#333",
        fontSize: "12px",
        marginLeft: "auto",
        background: "white",
        padding: "4px 8px",
        borderRadius: "50%",
        height: "fit-content",
        fontWeight: "bold",
        cursor: "pointer",
      }}
      onClick={() => {
        if (data.fan !== undefined) {
          if (data.fan === 5) {
            handleChangeFanSpeed(0);
          } else {
            handleChangeFanSpeed(fanSpeed + 1);
          }
        }
      }}
    >
      {data?.fan}
    </span>
  </div>  )
}

export default FanCard