import {
  List,
  ListItem,
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
        bgcolor: "background.paper",
        height: "100vh",
      }}
      subheader={<ListSubheader>Admin Panel</ListSubheader>}
    >
      <Link to="/admin/dashboard">
        <ListItem>
          <ListItemIcon>
            <InsightsOutlined />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>
      <Link to="/admin/products">
        <ListItem>
          <ListItemIcon>
            <ShoppingCartOutlined />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
      </Link>
      <Link to="/admin/orders">
        <ListItem>
          <ListItemIcon>
            <TaskOutlined />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
      </Link>
    </List>
  );
}
