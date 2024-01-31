"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#F4F1DE",
      main: "#EAB69F",
      dark: "#E07A5F",
    },
    secondary: {
      light: "#F5F1ED",
      main: "#D4D3D5",
      dark: "#B3B5BD",
    },
    success: {
      light: "#C8E6C9",
      main: "#A5D6A7",
      dark: "#66BB6A",
    },
    error: {
      light: "#FFCDD2",
      main: "#EF9A9A",
      dark: "#EF5350",
    },
    info: {
      light: "#B3E5FC",
      main: "#81D4FA",
      dark: "#29B6F6",
    },
    warning: {
      light: "#FFE0B2",
      main: "#FFCC80",
      dark: "#FFA726",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
