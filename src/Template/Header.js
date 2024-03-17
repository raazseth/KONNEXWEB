import React from "react";

const Header = () => {
  const areas = ["Living Room", "Kitchen Room", "Bed Room", "Game Room"];
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {areas.map((area, index) => (
        <div
          key={index}
          style={{
            padding: "10px",
            margin: "10px",
            backgroundColor: "lightgray",
          }}
        >
          {area}
        </div>
      ))}
    </div>
  );
};

export default Header;
