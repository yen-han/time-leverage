import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function StatisticsByTag() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      className="form"
      sx={{
        width: "100%",
        padding: "2rem",
        border: "1px #1a1a1a solid",
        borderRadius: "4px",
        backgroundColor: "white",
      }}
    >
      <Typography variant="h5" component="h5" sx={{ mb: "1.5rem" }}>
        New Time Line
      </Typography>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        sx={{ width: "100%", mb: "1rem" }}
      />
      <Container
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          mb: "1rem",
          pl: { xs: "0", md: "0" },
          pr: { xs: "0", md: "0" },
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileTimePicker
            label="From"
            defaultValue={dayjs("2022-04-17T15:30")}
            sx={{ width: "48%" }}
          />
          <MobileTimePicker
            label="To"
            defaultValue={dayjs("2022-04-17T15:30")}
            sx={{ width: "48%" }}
          />
        </LocalizationProvider>
      </Container>
      <TextField
        id="outlined-basic"
        label="Description"
        variant="outlined"
        sx={{ width: "100%", mb: "1rem" }}
      />
      <Box sx={{ width: "100%", mb: "1rem" }}>
        <Typography variant="subtitle2" gutterBottom>
          Tags
        </Typography>
        <IconButton aria-label="add" onClick={handleClickOpen}>
          <AddCircleOutlineOutlinedIcon />
        </IconButton>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Tags</DialogTitle>
          <DialogContent>
            <Button disabled>Add tags</Button>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Add</Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Button variant="contained">Add</Button>
    </Box>
  );
}
