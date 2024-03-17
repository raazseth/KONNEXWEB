import { useState } from "react";
import "./App.css";

function App() {
  const [currentPage, setcurrentPage] = useState("Living Room");
  const areas = ["Living Room", "Kitchen Room", "Bed Room", "Game Room"];

  return (
    <div className="mainBody">
      <div className="absoluteFix" />
      <div className="mainContainer">
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
                backgroundColor:
                  currentPage === area ? "#4c4c4e" : "transparent",
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

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "transparent",
              padding: "10px",
              height: "200px",
              width: "200px",
              borderRadius: "12px",
              backdropFilter: "blur(12px)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
