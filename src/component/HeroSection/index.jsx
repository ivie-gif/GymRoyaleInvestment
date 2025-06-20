import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Grid,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme } from "@mui/material/styles";
import landingpage from "../../assets/landingpage.jpg";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const drawerWidth = 240;

const navItems = [
  { label: "Home", id: "/" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact", id: "contact" },
];

const HeroSection = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [alignment, setAlignment] = useState("right");

  useEffect(() => {
    const interval = setInterval(() => {
      setAlignment((prev) => (prev === "right" ? "center" : "right"));
    }, 5000); // change every 5s

    return () => clearInterval(interval);
  }, []);

  const alignmentStyles = {
    right: {
      justifyContent: "flex-end",
      textAlign: "right",
      width: "100%",
      maxWidth: "800px",
    },
    center: { justifyContent: "center", textAlign: "center" },
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // setMobileOpen(false);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* Small screen */}
      <Typography variant="h6" sx={{ my: 2, fontSize: "1.0rem" }}>
        GYMROYALEINVESTMENT
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url(${landingpage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.6)",
          zIndex: 1,
        }}
      />
      {/* Navbar */}
      <AppBar position="absolute" color="transparent" elevation={0}>
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              pt: { xs: 1, md: 1 },
              display: { xs: "block", sm: "block" },
              textAlign: "left",
              ml: { xs: 0, md: 5 },
            }}
          >
            {/* <img
                src={Logo}
                alt="logo"
                loading="lazy"
                width={150}
                height={70}
              /> */}
            GYMROYALEINVESTMENT
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, textAlign: "right" }}
          >
            <MenuIcon sx={{ color: "#E10000", textAlign: "right" }} />
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                sx={{
                  color: "#fff",
                  "&:hover": { color: "#fff", backgroundColor: "#E10000" },
                  px: 2,
                  textAlign: "center",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" }, mx: 5 }}>
            <Button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              sx={{
                color: "#E10000",
                border: "2px solid #E10000",
                borderRadius: "20px",
                "&:hover": { backgroundColor: "#E10000", color: "#ffffff" },
                px: 2,
                textAlign: "center",
              }}
            >
              Free Quote
            </Button>
          </Box>
        </Toolbar>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            backgroundColor: "grey",
            height: { xs: "1px", md: "1px" },
            mt: { xs: 2, md: 3 },
            mb: { xs: 2, md: 4 },
          }}
        />
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      {/* Hero Content */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          zIndex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <Container maxWidth="lg">
          <Grid container justifyContent="flex-end">
            <Grid item xs={12} md={8}>
              <motion.div
                key={alignment}
                initial={{ opacity: 0, x: alignment === "right" ? 100 : 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                style={{ ...alignmentStyles[alignment] }}
              >
                <Typography
                  variant="h6"
                  color="primary"
                  fontWeight="bold"
                  mb={2}
                  sx={{ mt: { xs: 10, md: 2 } }}
                >
                  Welcome To GYMROYALEINVESTMENT
                </Typography>
                <Typography
                  variant="h2"
                  component="h1"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ width: "100%", fontSize: { xs: "2rem", md: "4rem" } }}
                >
                  Invest your money with higher return
                </Typography>
                <Typography variant="body1" fontSize={18} mb={4}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy...
                </Typography>
                <Box flexWrap="wrap" gap={2} mb={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: 999, px: 4 }}
                  >
                    Learn More
                  </Button>
                </Box>
                <Box
                  display="flex"
                  justifyContent={alignment}
                  alignItems="center"
                  gap={1}
                  sx={{ mb: { xs: 10, md: 0 } }}
                >
                  <Typography variant="h6">Follow Us:</Typography>
                  <IconButton sx={{ color: "#fff" }}>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton sx={{ color: "#fff" }}>
                    <TwitterIcon />
                  </IconButton>
                  <IconButton sx={{ color: "#fff" }}>
                    <InstagramIcon />
                  </IconButton>
                  <IconButton sx={{ color: "#fff" }}>
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </motion.div>
              {/* Two Alignment Buttons at Bottom-Left */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: 20, md: 25 },
                  left: { xs: 120, md: 20 },
                  zIndex: 3,
                  display: "flex",
                  gap: 2,
                }}
              >
                <Button
                  variant={alignment === "right" ? "contained" : "outlined"}
                  color="secondary"
                  onClick={() => setAlignment("right")}
                  sx={{ borderRadius: "50%", width: 60, height: 60 }}
                >
                  <ArrowForwardIcon />
                </Button>
                <Button
                  variant={alignment === "center" ? "contained" : "outlined"}
                  color="secondary"
                  onClick={() => setAlignment("center")}
                  sx={{ borderRadius: "50%", width: 60, height: 60 }}
                >
                  <ArrowBackIcon />
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;
