import { createTheme, Theme } from "@mui/material";
import { blue } from "@mui/material/colors";

const CustomTheme: Theme = createTheme({
  palette: {
    primary: {
      main: blue[600],
    },
    secondary: {
      main: "#fff",
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        sx: {
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        sx: {
          textTransform: "capitalize",
          minWidth: 130,
        },
      },
    },
    MuiAccordion: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiPaper: {
      defaultProps: {
        variant: "outlined",
      },
    },
  },
  typography: {
    fontFamily: "Nunito",
  },
});

export default CustomTheme;
