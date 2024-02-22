export interface holidayType {
  // activeRegion:string,
  Region: string;
  holidays: Date[];
}
export interface holidayType2 {
  activeRegion: string;
  assignedHolidayContext: holidayType[]
  activeRegionChange: (value: string) => void;
}
