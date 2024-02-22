// import React from "react";
// import PageHeader from "../component/PageHeader";
// import { Grid } from "@mui/material";
// import Input from "../component/Input";
import FirstInputTile from "../component/FirstInputTile";
import SecondInputTile from "../component/SecondInputTile";
import { HolidayContextProvider } from "../component/Context";
import MyCalendar from "../component/Mycalendar";
import { Button, Grid } from "@mui/material";
import { useState } from "react";


const Timeline = () => {
  const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const [activeYear, setActiveYear] = useState("2024");

  function handleChange(str: string) {
    setActiveYear(str);
    console.log("Value set to", str);
  }
  return (
    <HolidayContextProvider>
      <div className="timeline-container">
        <FirstInputTile />
        <SecondInputTile handleChange={handleChange} />
        <Grid
          container
          gap={2}
          sx={{ justifyContent: "center", marginTop: "20px" }}
        >
          {months.map((month) => (
            <MyCalendar year={Number(activeYear)} key={month} value={month} />
          ))}
        </Grid>
        <div
          style={{
            margin: "10px",
            // border: "1px solid",
            display: "flex",
            justifyContent: "center",
            padding: "5px",
          }}
        >
          <Button variant="outlined" sx={{ marginRight: "10px" }}>
            Cancel
          </Button>
          <Button variant="contained" sx={{ width: "9vh" }}>
            Save
          </Button>
        </div>
      </div>
    </HolidayContextProvider>
  );
};

export default Timeline;
