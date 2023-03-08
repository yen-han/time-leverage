import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function StatisticsByTag() {
  return (
    <Box
      className="form"
      sx={{
        width: "60%",
        padding: "2rem",
        border: "1px black solid",
        borderRadius: "4px",
        backgroundColor: "white",
      }}
    >
      <Typography variant="h5" component="h5" sx={{ mb: "1.5rem" }}>
        Add New Time Line
      </Typography>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        sx={{ width: "100%", mb: "1.5rem" }}
      />
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        sx={{ width: "100%", justifyContent: "space-between" }}
      >
        <MobileTimePicker
          label="From"
          defaultValue={dayjs("2022-04-17T15:30")}
          sx={{ width: "45%", mb: "1.5rem", mr: "7%" }}
        />
        <MobileTimePicker
          label="To"
          defaultValue={dayjs("2022-04-17T15:30")}
          sx={{ width: "45%", mb: "1.5rem" }}
        />
      </LocalizationProvider>
      <TextField
        id="outlined-basic"
        label="Description"
        variant="outlined"
        sx={{ width: "100%", mb: "1.5rem" }}
      />
      <Button variant="contained">Add</Button>
    </Box>
  );
}
