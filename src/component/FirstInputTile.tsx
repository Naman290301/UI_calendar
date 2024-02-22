import React from "react";
import { Grid, IconButton } from "@mui/material";
import Input from "../component/Input";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const FirstInputTile: React.FC<{ handleChange?: () => void }> = ({
  handleChange,
}) => {
  const regionArray = ["NorthEast", "NorthWest", "SouthEast", "SouthWest"];
  const milestoneArray = [
    "Milestone 1",
    "Milestone 2",
    "Milestone 3",
    "Milestone 4",
  ];
  return (
    <Grid
      container
      sx={{
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Input labelName="Region" optionList={regionArray} />
      <Input labelName="Milestone" optionList={milestoneArray} />

      <Grid
        item
        className="input-container"
        sx={{
          fontWeight: "bold",
          borderRadius: "10px",
          padding: "2px",
          height: "5vh",
          backgroundColor: "lightgray",
          color: "gray",
        }}
      >
        <IconButton>
          <InfoOutlinedIcon />
        </IconButton>
        Due dates will be shown as per your local time zone
      </Grid>
      <Grid item className="input-container">
        <div className="circle" style={{ backgroundColor: "green" }}></div>
        <span className="input-container-span">Overall MSR Submission</span>
      </Grid>
      <Grid item className="input-container">
        <div className="circle" style={{ backgroundColor: "yellow" }}></div>
        <span className="input-container-span">SPW Max Submission</span>
      </Grid>

      <Grid item className="input-container">
        <div className="circle" style={{ backgroundColor: "orange" }}></div>
        <span className="input-container-span">
          Auto Post Date{" "}
          <span className="light-text">(15th of each month)</span>
        </span>
      </Grid>
    </Grid>
  );
};

export default FirstInputTile;
