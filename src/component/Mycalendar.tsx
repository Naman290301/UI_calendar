import * as React from "react";
import "../App.css";
import { Grid } from "@mui/material";
import "react-calendar/dist/Calendar.css";
import { HolidayContext } from "./Context";

import Calendar from "react-calendar";
const MyCalendar: React.FC<{ year: number; value: number }> = ({
  year,
  value,
}) => {
  const [highlightedDates, setHighlightedDates] = React.useState([
    new Date(2024, 1, 14),
    new Date(2024, 1, 21),
  ]);
  const [date, setDate] = React.useState(new Date(year, value));
  const monthNamesArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const holidayCtx = React.useContext(HolidayContext);

  React.useEffect(() => {
    for (var i = 0; i < holidayCtx!.assignedHolidayContext.length; i++) {
      if (
        holidayCtx!.assignedHolidayContext[i].Region ===
        holidayCtx!.activeRegion
      )
        setHighlightedDates([
          ...holidayCtx!.assignedHolidayContext[i].holidays,
        ]);
    }
  }, [holidayCtx!.activeRegion]);

  React.useEffect(() => {
    setDate(new Date(year, value));
  }, [year]);
  const formatShortWeekday = (locale: string | undefined, date: Date) => {
    const customShortWeekdays = ["S", "M", "T", "W", "T", "F", "S"];
    return customShortWeekdays[date.getDay()];
  };

  // const tileContent = (date: Date, view: string) => {
  //   const isHighlighted = highlightedDates.some((highlightedDate) =>
  //     date.toISOString().includes(highlightedDate.toISOString())
  //   );

  //   // Add custom content or styling for highlighted dates
  //   if (isHighlighted) {
  //     return (
  //       <div
  //         style={{
  //           backgroundColor: "green",
  //           borderRadius: "50%",
  //           padding: "2px",
  //         }}
  //       ></div>
  //     );
  //   }

  //   return <></>; // Default, no additional content for other dates
  // };

  const tileClass = ({ date, view}: {
    date: Date;
    view: string;
  }): string | null => {
    var cssClass = "class-tile";
    console.log(date.getDay())
    if(date.getDay()==0 || date.getDay()==6)
    cssClass+=' light-text';
    const isHighlighted = highlightedDates.some(
      (highlightedDate) =>
        date.toISOString().split("T")[0] ===
        highlightedDate.toISOString().split("T")[0]
    );

    if (isHighlighted) return (cssClass += " highlighted");

    return cssClass;
  };

  return (
    <Grid
      item
      sx={{
        border: "2px solid gray",
        padding: "10px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2>
        {monthNamesArr[date.getMonth()]} {year}
      </h2>
      <Calendar
        formatShortWeekday={formatShortWeekday}
        calendarType="hebrew"
        value={date}
        tileClassName={tileClass}
        showNeighboringMonth={false}
        className="class-calendar"
        showNavigation={false}
      />
      {/* <Calendar
        calendarType="hebrew"
        value={date}
        showNavigation={false}
        showNeighboringMonth={false}
        // tileClassName={tileClass}
        className="class-calendar"
      /> */}
    </Grid>
  );
};

export default MyCalendar;
