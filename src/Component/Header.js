import React from "react";

const Header = ({ currentPage, setcurrentPage }) => {
    const areas = ["Living Room", "Kitchen Room", "Bed Room", "Game Room"];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {areas.map((area, index) => (
        <div
          key={index}
          onClick={() => setcurrentPage(area)}
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: currentPage === area ? "#4c4c4e" : "transparent",
            backdropFilter: "blur(24px)",
            color: "#f1f1f2",
            fontSize: "14px",
            width: "auto",
            textAlign: "center",
            borderRadius: "24px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {currentPage === area && (
            <div
              style={{
                background: "#8ffe7b",
                height: "5px",
                width: "5px",
                borderRadius: "50%",
                margin: "auto 10px auto 0",
              }}
            />
          )}
          <span>{area}</span>
        </div>
      ))}
    </div>
  );
};

export default Header;
