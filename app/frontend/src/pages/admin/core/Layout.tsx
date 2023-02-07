//Importing core components
import { Box } from "@mui/material";
import { ReactElement } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = (props: { children: ReactElement }) => {
  return (
    <Box
      height={"100vh"}
      width={"100vw"}
      position="relative"
      bgcolor={"#121a35"}
    >
      <Navbar />
      <Sidebar />
      <Box
        position={"absolute"}
        sx={{
          width: "calc(100vw - 300px)",
          height: "calc(100vh - 65px)",
          right: 0,
          bottom: 0,
          p: "1rem",
          overflow: "auto",
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default Layout;
