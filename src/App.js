import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Wheel from "@uiw/react-color-wheel";
import { hsvaToHex } from "@uiw/color-convert";
import { getDeviceStatus, sendDeviceControlRequest } from "./Utils/API";
import { Snackbar } from "@mui/material";
import Header from "./Component/Header";
import MusicPlayer from "./Component/MusicPlayer";
import Calendar from "./Component/Calendar";
import FanCard from "./Component/FanCard";
import BulbCard from "./Component/BulbCard";
import WeatherCard from "./Component/WeatherCard";
import CoolingCard from "./Component/CoolingCard";

function App() {
  const [currentPage, setcurrentPage] = useState("Living Room");
  const [data, setdata] = useState(null);
  const [isBulb, setisBulb] = useState(false);
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  const [makeAlert, setmakeAlert] = useState({
    isOpen: true,
    message: "Device Status Updated!",
  });
  const [isLoading, setisLoading] = useState(true);
  const [fanSpeed, setfanSpeed] = useState(0);
  const [acSpeed, setacSpeed] = useState(17);
  const [isAc, setisAc] = useState(false);
  const [weather, setweather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const IPAPi = "http://ip-api.com/json/";
        const IpAPIRes = await axios.get(IPAPi);
        if (IpAPIRes) {
          const res = await axios.get(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${IpAPIRes.data.city},${IpAPIRes.data.country}?key=VH7M2ZKTME5HQLU9RZ6DV9NZL`
          );
          setweather(res.data);
        }
      } catch (error) {}
    };
    fetchWeather();
  }, []);

  const fetchStatus = async () => {
    try {
      const status = await getDeviceStatus();
      if (status === null) {
        setisLoading(true);
      } else {
        setisLoading(false);
        setmakeAlert({
          ...makeAlert,
          isOpen: true,
          message: "Device Status Updated!",
        });
      }
      setdata(status);
    } catch (error) {
      console.error("Error fetching device status:", error);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, [isLoading]);

  const handleChangeBulbColor = async (color) => {
    if (!isLoading) {
      setisLoading(true);
      sendDeviceControlRequest("led", color)
        .then((result) => {
          setisLoading(false);
          setmakeAlert({
            ...makeAlert,
            isOpen: true,
            message: "Color Updated!",
          });
        })
        .catch((err) => {
          setisLoading(false);
          setmakeAlert({ ...makeAlert, isOpen: true, message: "Error!" });
        });
    }
  };

  const handleChangeFanSpeed = async (speed) => {
    setfanSpeed(speed);
    if (!isLoading) {
      setisLoading(true);
      sendDeviceControlRequest("fan", speed)
        .then((result) => {
          setisLoading(false);
          setmakeAlert({
            ...makeAlert,
            isOpen: true,
            message: "Fan Speed Updated!",
          });
        })
        .catch((err) => {
          setisLoading(false);
          setmakeAlert({ ...makeAlert, isOpen: true, message: "Error!" });
        });
    }
  };

  const handleChangeACStatus = (status, acSpeed) => {
    setisAc(status);
    if (!isLoading) {
      setisLoading(true);
      sendDeviceControlRequest("ac", {
        state: status === true ? 1 : 0,
        temp: acSpeed,
      })
        .then((result) => {
          setisLoading(false);
          setmakeAlert({
            ...makeAlert,
            isOpen: true,
            message: "AC Status Updated!",
          });
        })
        .catch((err) => {
          setisAc(!status);
          setisLoading(false);
          setmakeAlert({ ...makeAlert, isOpen: true, message: "Error!" });
        });
    }
  };

  const handleChangeBulbStatus = (status) => {
    setisBulb(status);
    if (!isLoading) {
      setisLoading(true);
      sendDeviceControlRequest("bulb", status === true ? 1 : 0)
        .then((result) => {
          setisLoading(false);
          setmakeAlert({
            ...makeAlert,
            isOpen: true,
            message: "Bulb Status Updated!",
          });
        })
        .catch((err) => {
          setisBulb(!status);
          setmakeAlert({ ...makeAlert, isOpen: true, message: "Error!" });
        });
    }
  };

  const colors = [
    "#4077fe",
    "#f7b733",
    "#3ffff7",
    "#4caf50",
    "#ff5252",
    "#4077fe",
    data?.led,
  ];

  const uniqueColorsSet = new Set(colors);

  const uniqueColorsArray = Array.from(uniqueColorsSet);

  return (
    <div className="mainBody">
      <div className="absoluteFix" />
      <div className="mainContainer">
        <Header currentPage={currentPage} setcurrentPage={setcurrentPage} />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginTop: "20px", width: "64%", padding: "12px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <MusicPlayer />
              <Calendar />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "20px 0",
              }}
            >
              <FanCard
                data={data}
                fanSpeed={fanSpeed}
                handleChangeFanSpeed={handleChangeFanSpeed}
              />
              <BulbCard
                data={data}
                handleChangeBulbStatus={handleChangeBulbStatus}
                isBulb={isBulb}
                handleChangeBulbColor={handleChangeBulbColor}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <WeatherCard weather={weather} />
              <CoolingCard
                isAc={isAc}
                data={data}
                acSpeed={acSpeed}
                setacSpeed={setacSpeed}
                handleChangeACStatus={handleChangeACStatus}
              />
            </div>
          </div>

          <div
            style={{
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                color: "white",
                marginBottom: "1em",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                }}
              >
                Smart LED
              </h3>
            </div>
            <div
              style={{
                margin: "auto 0",
              }}
            >
              <Wheel
                color={hsva}
                onChange={(color) => {
                  setHsva({ ...hsva, ...color.hsva });
                  handleChangeBulbColor(hsvaToHex(hsva));
                }}
                width={300}
                height={300}
              />
            </div>
            <div style={{ marginTop: "auto", marginBottom: "2em" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1.4em",
                }}
              >
                {uniqueColorsArray.map((color, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor:
                        color === data?.led
                          ? "rgba(149, 157, 165, 0.179)"
                          : "transparent",
                      height: "64px",
                      display: "flex",
                      padding: "6px",
                      paddingBottom: "8px",
                      borderRadius: "30px",
                      margin: "0 6px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: color,
                        height: "24px",
                        width: "24px",
                        borderRadius: "50%",
                        margin: "auto 0 4px 0",
                        cursor: "pointer",
                      }}
                      onClick={() => handleChangeBulbColor(color)}
                    />
                  </div>
                ))}
              </div>
              <p
                style={{
                  color: "white",
                  opacity: "0.6",
                  fontSize: "13.5px",
                  textAlign: "center",
                  marginTop: "4px",
                }}
              >
                Your Favourites
              </p>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={makeAlert.isOpen}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => setmakeAlert({ ...makeAlert, isOpen: false })}
        message={makeAlert.message}
      />
    </div>
  );
}

export default App;
