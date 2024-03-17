import React from "react";
import { CiCircleMinus } from "react-icons/ci";
import { FaCircleMinus } from "react-icons/fa6";
import lightBulb from "../Assets/Icons/lightBulb.png";

const BulbCard = ({ handleChangeBulbStatus, isBulb, data }) => {
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
        marginLeft: "auto",
      }}
    >
      <img
        src={lightBulb}
        alt="lightBulb"
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
          Bulb
        </h3>
        <h4
          style={{
            fontWeight: "normal",
            fontSize: "13px",
            opacity: "0.6",
          }}
        >
          MI Smart Bulb
        </h4>
      </div>

      {isBulb || data?.bulb ? (
        <FaCircleMinus
          onClick={() => handleChangeBulbStatus(false)}
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
          onClick={() => handleChangeBulbStatus(true)}
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
  );
};

export default BulbCard;
