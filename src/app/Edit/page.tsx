"use client";
import Box from "@mui/material/Box";
import EditTimeLine from "@/app/components/EditTimeLine/EditTimeLine";

export default function Edit() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "30%",
        transform: "translateY(-50%)",
      }}
    >
      <EditTimeLine />
    </Box>
  );
}
