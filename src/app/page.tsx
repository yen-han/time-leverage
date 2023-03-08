"use client";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Calendar from "@/app/components/Calendar";
import TimeLine from "@/app/components/TimeLine/TimeLine";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import StatisticsByTag from "./components/StatisticsByTag/StatisticsByTag";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} alignItems="center">
          <Container
            sx={{
              position: { xs: "none", md: "fixed" },
              my: 10,
              left: "4%",
              width: { xs: "70%", md: "40%" },
            }}
          >
            <StatisticsByTag />
          </Container>
        </Grid>
        <Grid item xs={12} md={6}>
          <Calendar />
          <TimeLine />
        </Grid>
      </Grid>
    </main>
  );
}
