import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import {
  InsightsOutlined,
  ShoppingCartOutlined,
  TaskOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <List
      sx={{
        width: 300,
        bgcolor: "#0b132b",
        height: "100vh",
      }}
      subheader={<ListSubheader sx={{color: "#fff",bgcolor: "#0b132b"}}>Admin Panel</ListSubheader>}
    >
      <Link to="/admin/dashboard">
        <ListItemButton>
          <ListItemIcon>
            <InsightsOutlined htmlColor="#94a9b1"/>
          </ListItemIcon>
          <ListItemText primary="Dashboard" primaryTypographyProps={{color: "#94a9b1",fontWeight: 300,fontSize: "0.9rem"}}/>
        </ListItemButton>
      </Link>
      <Link to="/admin/products">
        <ListItemButton>
          <ListItemIcon>
            <ShoppingCartOutlined htmlColor="#94a9b1"/>
          </ListItemIcon>
          <ListItemText primary="Products" primaryTypographyProps={{color: "#94a9b1",fontWeight: 300,fontSize: "0.9rem"}}/>
        </ListItemButton>
      </Link>
      <Link to="/admin/orders">
        <ListItemButton>
          <ListItemIcon>
            <TaskOutlined htmlColor="#94a9b1"/>
          </ListItemIcon>
          <ListItemText primary="Orders" primaryTypographyProps={{color: "#94a9b1",fontWeight: 300,fontSize: "0.9rem"}}/>
        </ListItemButton>
      </Link>
    </List>
  );
}
