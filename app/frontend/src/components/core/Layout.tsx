//Importing core components
import { Box } from "@mui/material";
import { ReactElement } from "react";
import Header from "./Header";

const Layout = (props: { children: ReactElement }) => {
  return (
    <Box height={"100vh"} width={"100vw"} position="relative">
      <Header />
      <Box>{props.children}</Box>
    </Box>
  );
};

export default Layout;
