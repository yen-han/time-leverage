"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import AirlineSeatIndividualSuiteOutlinedIcon from "@mui/icons-material/AirlineSeatIndividualSuiteOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
export default function Tags() {
  const tags = [
    {
      name: "Sleep",
      icon: <AirlineSeatIndividualSuiteOutlinedIcon />,
      color: "darkGray",
      hoverColor: "",
    },
    {
      name: "Eating",
      icon: <RestaurantOutlinedIcon />,
      color: "rgb(254, 95, 85)",
    },
  ];

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "30%",
        transform: "translateY(-50%)",
      }}
    >
      {tags.map((tag, index) => {
        return (
          <List key={index}>
            <Button
              className="tag"
              variant="contained"
              startIcon={tag.icon}
              sx={{
                width: "150px",
                backgroundColor: tag.color,
                opacity: "0.8",
                "&:hover": {
                  backgroundColor: tag.color,
                  opacity: "1",
                },
              }}
            >
              {tag.name}
            </Button>
            <IconButton aria-label="delete" sx={{ ml: "1rem" }}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </List>
        );
      })}
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
}
