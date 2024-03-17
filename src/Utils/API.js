import axios from "axios";

const BASE_URL = "https://kodessphere-api.vercel.app/devices/";
// const TEST_URL="https://kodessphere-api-test.vercel.app/devices/"
const TEAM_ID = "IhceXG2";

export const sendDeviceControlRequest = async (device, value) => {
  try {
    const response = await axios.post(`${BASE_URL}`, {
      teamid: TEAM_ID,
      device: device,
      value: value,
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getDeviceStatus = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${TEAM_ID}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
