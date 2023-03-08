import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function TimeLine() {
  const [remainingTime, setRemainingTime] = useState("24h");
  return (
    <Card sx={{ minWidth: 275, mt: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {remainingTime}
        </Typography>
        <Typography variant="h5" component="div">
          Name
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Tag
        </Typography>
        <Typography variant="body2">Description</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link href="/Edit">Edit</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
