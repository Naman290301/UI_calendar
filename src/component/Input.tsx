import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Grid } from "@mui/material";
import { HolidayContext } from "./Context";

const Input: React.FC<{
  labelName: string;
  optionList: string[];
  handleChange?: (region: string) => void;
}> = ({ labelName, optionList, handleChange: handleChanger }) => {
  const [region, setRegion] = React.useState("");
  const holidayCtx = React.useContext(HolidayContext);

  if (labelName === "Region") {
    React.useEffect(
      () => setRegion(holidayCtx!.activeRegion),
      [holidayCtx?.activeRegion]
    );
  }

  const handleChange = (event: SelectChangeEvent) => {
    const selectedRegion = event.target.value as string;

    setRegion(selectedRegion);
    if (labelName === "Region") {
      holidayCtx?.activeRegionChange(selectedRegion);
    }
    if (labelName === "Year") {
      handleChanger!(selectedRegion);
    }
  };

  return (
    <Grid item sx={{ height: "10vh", display: "flex", alignItems: "center" }}>
      <span>{labelName}</span>
      <FormControl sx={{ m: 1, minWidth: 230 }}>
        <Select value={region} onChange={handleChange} sx={{ width: "100%" }}>
          {optionList.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default Input;
