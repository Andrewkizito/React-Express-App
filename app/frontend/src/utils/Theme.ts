import { createTheme, Theme } from "@mui/material";
import { blue } from "@mui/material/colors";

const CustomTheme: Theme = createTheme({
  palette: {
    primary: {
      main: blue[900],
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
          minWidth: 180,
        },
      },
    },
  },
  typography: {
    fontFamily: "Nunito",
  },
});

export default CustomTheme;
