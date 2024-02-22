import { Grid } from "@mui/material";
import Input from "./Input";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SecondInputTile: React.FC<{ handleChange: (value: string) => void }> = ({
  handleChange,
}) => {
  const yearArray: string[] = [];

  const date = new Date();

  for (var i = 0; i < 4; i++) yearArray.push(String(date.getFullYear() + i));

  
  function changeHandler(date: Date) {
    console.log(date);
  }
  return (
    <Grid container className="second-tile-class">
      <Input
        labelName="Year"
        optionList={yearArray}
        handleChange={handleChange}
      />
      <Grid item>
        <span style={{ marginRight: "10px" }}>Select DRP Holidays</span>
        <ReactDatePicker className="datepicker" onChange={changeHandler} />
      </Grid>
    </Grid>
  );
};

export default SecondInputTile;
