import React from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const Services = () => {
  const ServicesTypes = [
    {
      id: 1,
      title: "Investment",
      description:
        "We help you grow your wealth through secure and reliable investments. We help you grow your wealth through secure and reliable investments.",
      icon: BusinessCenterIcon,
    },
    {
      id: 2,
      title: "Consultancy",
      description:
        "We help you grow your wealth through secure and reliable investments. We help you grow your wealth through secure and reliable investments.",
      icon: BusinessCenterIcon,
    },
    {
      id: 3,
      title: "Investment",
      description:
        "We help you grow your wealth through secure and reliable investments. We help you grow your wealth through secure and reliable investments.",
      icon: BusinessCenterIcon,
    },
    {
      id: 4,
      title: "Consultancy",
      description:
        "We help you grow your wealth through secure and reliable investments. We help you grow your wealth through secure and reliable investments.",
      icon: BusinessCenterIcon,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "#fff",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Box>
          <Typography
            variant="h5"
            component="h2"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "1.6rem", md: "2rem" },
              // textAlign: { xs: "center", md: "left" },
              mt: { xs: 0, md: 5 },
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            color="primary"
            sx={{
              mx: { xs: 0, md: 50 },
              textAlign: { xs: "center", md: "center" },
            }}
          >
            Connecting businesses, ideas, and people for greater impact.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.95rem", md: "1rem" },
              textAlign: { xs: "center", md: "center" },
              mb: { xs: 3, md: 4 },
              mx: { xs: 0, md: 50 },
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </Typography>
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <Grid container spacing={2} sx={{ mt: 10, px: { xs: 0, md: 10 } }}>
          {ServicesTypes.map((service) => (
            <Grid item key={service.id} size={{ xs: 12, md: 6, lg: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: 2,
                  borderRadius: 2,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "rgb(228, 236, 244)",
                }}
              >
                <service.icon sx={{ fontSize: 48, mb: 2 , mt: 3}} />
                <Typography variant="h6" component="h3" fontWeight="bold">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
                <Box sx={{ mt: 5, mb: 2 }}>
                  <Button variant="contained" color="primary">
                    Learn More
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};
export default Services;
