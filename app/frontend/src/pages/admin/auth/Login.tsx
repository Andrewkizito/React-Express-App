//Importing helper modules
import { api, updateData } from "../../../utils/modules";
import { useState } from "react";

//Importing core modules
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
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });

  const centerStyles: CSSObject = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
  };

  async function submit() {
    const res = await api.post("/auth/register", { email: "AndrewKizito54@gmail.com", password: "Kitab777!"});
    console.log(res)
  }

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
        <TextField
          fullWidth
          label="Username"
          value={form.username}
          onChange={(e: any) => updateData("username", e.target.value, setForm)}
        />
        <TextField
          fullWidth
          label="Password"
          value={form.password}
          type="password"
          onChange={(e: any) => updateData("password", e.target.value, setForm)}
        />
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
        <Button onClick={submit} endIcon={<Login />} fullWidth>
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginPage;
