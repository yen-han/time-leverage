"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Calendar from "@/app/components/Calendar";
import TimeLine from "@/app/components/TimeLine/TimeLine";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} alignItems="center">
          <Box
            sx={{
              width: 300,
              height: 300,
              backgroundColor: "primary.dark",
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          ></Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Calendar />
          <TimeLine />
          <TimeLine />
          <TimeLine />

          <TimeLine />
          <TimeLine />
          <TimeLine />
          <TimeLine />
          <TimeLine />
        </Grid>
      </Grid>
    </main>
  );
}
