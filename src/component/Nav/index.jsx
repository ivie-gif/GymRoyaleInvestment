import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Grid from "@mui/material/Grid";


function DrawerAppBar() {

  return (
    <Box     sx={{
      backgroundColor: "#fff",
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
  window: PropTypes.func,
};

export default DrawerAppBar;
