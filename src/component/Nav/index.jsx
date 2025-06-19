import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Grid from "@mui/material/Grid";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function DrawerAppBar(props) {

  return (
    <Box     sx={{
      backgroundColor: "green",
      height: { xs: "12vh", md: "7vh" },
      mt: -2,
      px: 2,
      alignItems: "center",
      display: "flex",
      pt: 2,
    }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ py: { xs: 2, md: 2 } }}
        >
          <Grid item xs={12} md={6} sx={{ pb: { xs: 1, md: 0 } }}>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <EmailIcon sx={{ fontSize: 18, color: "#E10000" }} />
                <Typography variant="body2" sx={{ color: "#000000" }}>
                  info@zastmedia.net
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PhoneIcon sx={{ fontSize: 18, color: "#E10000" }} />
                <Typography variant="body2" sx={{ color: "#000000" }}>
                  02012272905
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LocationOnIcon sx={{ fontSize: 18, color: "#E10000" }} />
              <Typography variant="body2" sx={{ color: "#000000" }}>
                16th Floor, 8-10 Broad Street, Marina, Lagos, Nigeria
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
