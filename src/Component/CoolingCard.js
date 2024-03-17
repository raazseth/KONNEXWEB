import React from "react";
import { CiCircleMinus } from "react-icons/ci";
import { FaCircleMinus } from "react-icons/fa6";
import AC from "../Assets/Icons/air-conditioner.png";
import Slider from "@mui/material/Slider";

const CoolingCard = ({
  handleChangeACStatus,
  isAc,
  data,
  acSpeed,
  setacSpeed,
}) => {
  return (
    <div
      style={{
        backgroundColor: "transparent",
        padding: "12px",
        height: "auto",
        width: "440px",
        borderRadius: "12px",
        backdropFilter: "blur(12px)",
        display: "flex",
        flexDirection: "column",
        color: "#fff",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h3>Cooling</h3>
        {isAc || data?.ac?.state ? (
          <FaCircleMinus
            onClick={() => handleChangeACStatus(false, acSpeed)}
            style={{
              color: "white",
              fontSize: "24px",
              marginLeft: "auto",
              cursor: "pointer",
              transform: "rotate(90deg)",
            }}
          />
        ) : (
          <CiCircleMinus
            onClick={() => handleChangeACStatus(true, acSpeed)}
            size={24}
            style={{
              color: "lightgrey",
              fontSize: "24px",
              marginLeft: "auto",
              cursor: "pointer",
            }}
          />
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "4px",
        }}
      >
        <img
          src={AC}
          alt="AC"
          style={{
            height: "110px",
            width: "110px",
            objectFit: "contain",
            marginRight: "10px",
          }}
        />
        <div
          style={{
            marginTop: "1em",
            marginBottom: "1em",
            marginLeft: ".5em",
          }}
        >
          <h3
            style={{
              fontSize: "22px",
              fontWeight: "normal",
              fontWeight: "600",
            }}
          >
            19°C
          </h3>
          <h4
            style={{
              fontWeight: "normal",
              fontSize: "14px",
              opacity: "0.6",
            }}
          >
            Samsung Smart AC
          </h4>
          <Slider
            value={data?.ac?.temp || acSpeed}
            onChange={(e, val) => {
              setacSpeed(val);
              handleChangeACStatus(true, val);
            }}
            aria-label="Custom slider"
            min={16}
            max={27}
            marks
            style={{
              width: "200px",
              marginTop: ".5em",
              marginLeft: ".5em",
            }}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default CoolingCard;
