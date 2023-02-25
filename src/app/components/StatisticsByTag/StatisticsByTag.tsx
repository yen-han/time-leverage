import { PieChart } from "react-minimal-pie-chart";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MenuIcon from "@mui/icons-material/Menu";
import CurtainsOutlinedIcon from "@mui/icons-material/CurtainsOutlined";
// import styles from "./StatisticsByTag.module.css";

export default function StatisticsByTag() {
  return (
    <PieChart
      lineWidth={60}
      data={[
        {
          title: "One",
          value: 10,
          color: "#E38627",
          label: <AccessTimeIcon />,
        },
        {
          title: "Two",
          value: 15,
          color: "#C13C37",
          label: <MenuIcon />,
        },
        {
          title: "Three",
          value: 20,
          color: "#6A2135",
          label: <CurtainsOutlinedIcon />,
        },
      ]}
      label={({ dataEntry }) => dataEntry.title}
      labelStyle={{ fontSize: "8px", fill: "#fff" }}
      labelPosition={70}
      animate={true}
      animationEasing={"cubic-bezier(0.4, 0, 0.68, 0.06)"}
    />
  );
}
