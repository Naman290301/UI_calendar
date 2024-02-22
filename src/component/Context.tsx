import React from "react";
import { holidayType } from "./ContextType";
import { holidayType2 } from "./ContextType";

interface HolidayContextProviderProps {
  children: React.ReactNode;
}

export const HolidayContext = React.createContext<holidayType2 | null>(null);

export const HolidayContextProvider: React.FC<HolidayContextProviderProps> = ({
  children,
}) => {
  const [assignedHolidayContext, setAssignedHolidayContext] = React.useState<holidayType[]>([
    {
      Region: "NorthEast",
      holidays: [new Date(2024, 1, 14), new Date(2024, 1, 21), new Date(2026, 1, 21)],
    },
    {
      Region: "NorthWest",
      holidays: [new Date(2024, 1, 15), new Date(2024, 1, 22)],
    },
    {
      Region: "SouthEast",
      holidays: [new Date(2024, 1, 16), new Date(2024, 1, 23)],
    },
    {
      Region: "SouthWest",
      holidays: [new Date(2024, 1, 17), new Date(2024, 1, 24)],
    },
  ]);
  const [activeRegion, setActiveRegion] = React.useState("NorthEast");
  function activeRegionChange(value: string) {
    // console.log(value);
    
   
    setActiveRegion(()=>value);
    // console.log(activeRegion);
  }
  return (
    <HolidayContext.Provider
      value={{ activeRegion, assignedHolidayContext, activeRegionChange }}
    >
      {children}
    </HolidayContext.Provider>
  );
};
