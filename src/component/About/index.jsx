import React from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import About from "../../assets/about.jpg";

const AboutSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "#f8f9fa",
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        sx={{ px: { xs: 2.5, md: 10 } }}
      >
        {/* Left Column - Text */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Typography
              variant="h5"
              component="h2"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: { xs: "25px", md: "24px" },
                textAlign: { xs: "left", md: "left" },
                lineHeight: { xs: "1.5rem", md: "29px" },
                fontWeight: 500,
                mt: { xs: 0, md: 5 },
              }}
            >
              About Us
            </Typography>

            <Typography
              variant="subtitle1"
              component="h3"
              color="primary"
              gutterBottom
              sx={{
                fontSize: { xs: "23px", md: "48px" },
                textAlign: { xs: "left", md: "left" },
                lineHeight: { xs: "1.5rem", md: "58px" },
                fontWeight: 700,
              }}
            >
              We help you grow your wealth
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              mb={{ xs: 3, md: 4 }}
              sx={{
                fontSize: { xs: "1rem", md: "16px" },
                textAlign: { xs: "left", md: "left" },
                lineHeight: { xs: "1.5rem", md: "24px" },
                fontWeight: 400,
                color: "rgb(120, 120, 120)",
              }}
            >
              We are a forward-thinking investment platform committed to helping
              individuals and businesses grow their finances through secure and
              reliable investments. Whether you're just getting started or
              expanding your portfolio, our team is here to guide you every step
              of the way.
            </Typography>

            <Box
              display="flex"
              justifyContent={{ xs: "flex-start", md: "flex-start" }}
              sx={{ mb: { xs: 2, md: 0 } }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  borderRadius: 999,
                  px: 4,
                  fontSize: { xs: "0.85rem", md: "1rem" },
                }}
              >
                Learn More
              </Button>
            </Box>
          </motion.div>
        </Grid>

        {/* Right Column - Image */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <motion.img
            src={About}
            alt="About Us"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            style={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              display: "block",
              margin: "0 auto",
            }}
          />
        </Grid>
      </Grid>
      {/* </Container> */}
      {/* </Box> */}
    </Box>
  );
};

export default AboutSection;
