import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

export default function Calendar() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(Date.now()));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        defaultValue={dayjs("2022-04-17")}
        sx={{ bgcolor: "white", borderRadius: "4px", width: "100%" }}
      />
      {/* <DatePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ bgcolor: "white", borderRadius: "4px", width: "100%" }}
          />
        )}
      /> */}
    </LocalizationProvider>
  );
}
