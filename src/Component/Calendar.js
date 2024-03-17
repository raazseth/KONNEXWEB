import moment from 'moment'
import React from 'react'

const Calendar = () => {
  return (
    <div
    style={{
      backgroundColor: "transparent",
      padding: "10px",
      height: "200px",
      width: "200px",
      borderRadius: "12px",
      backdropFilter: "blur(12px)",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      color: "#fff",
      marginLeft: "auto",
    }}
  >
    <h1
      style={{
        fontSize: "52px",
        fontWeight: "bold",
        marginBottom: "4px",
      }}
    >
      {moment().format("h:mm")}
    </h1>
    <h4
      style={{
        fontWeight: "normal",
        fontSize: "14px",
      }}
    >
      {moment().format("MMMM Do, YYYY")}
    </h4>
  </div>
  )
}

export default Calendar