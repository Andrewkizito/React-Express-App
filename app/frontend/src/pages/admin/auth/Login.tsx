import { Login } from "@mui/icons-material";
import {
  Box,
  Button,
  CSSObject,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const centerStyles: CSSObject = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
  };

  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      height="100vh"
      width="100vw"
      bgcolor="primary.main"
    >
      <Paper
        sx={{
          height: 400,
          width: 500,
          padding: "2rem 1.5rem",
          ...centerStyles,
        }}
      >
        <img src={"/logo.svg"} />
        <Typography fontWeight={600} fontSize={"1.2rem"} variant="h4">
          Sign In As Administrator.
        </Typography>
        <TextField fullWidth label="Username" />
        <TextField fullWidth label="Password" />
        <Box
          sx={{
            ...centerStyles,
            width: "100%",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Link to="/" style={{ fontSize: "0.9rem", color: blue[600] }}>
            Forgot Password
          </Link>
          <Link to="/" style={{ fontSize: "0.9rem" }}>
            Not Admin, Leave Page
          </Link>
        </Box>
        <Button endIcon={<Login />} fullWidth>
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginPage;
