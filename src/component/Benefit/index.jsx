import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Benefit1 from "../../assets/benefit1.jpg";
import Benefit2 from "../../assets/benefit2.jpg";
import Benefit3 from "../../assets/benefit3.jpg";
import Benefit4 from "../../assets/benefit4.jpg";

function TabPanel(props) {
  const { children, value, index, left, right, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ flex: 1 }}
    >
      {value === index && (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            p: 3,
          }}
        >
          <Box sx={{ flex: 1 }}>{left}</Box>
          <Box sx={{ flex: 1 }}>{right}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 0, md: 10 },
        backgroundColor: "#f8f9fa",
        height: { xs: "auto", md: "100vh" },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Typography
          variant="h5"
          component="h2"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "25px", md: "24px" },
            textAlign: { xs: "left", md: "center" },
            lineHeight: { xs: "1.5rem", md: "29px" },
            fontWeight: 500,
            mt: { xs: 0, md: 5 },
            px: { xs: 3, md: 0 },
          }}
        >
          Our Benefits
        </Typography>
        <Typography
          variant="subtitle1"
          component="h3"
          color="primary"
          gutterBottom
          sx={{
            mx: { xs: 0, md: 50 },
            textAlign: { xs: "left", md: "center" },
            fontSize: { xs: "23px", md: "48px" },
            lineHeight: { xs: "1.5rem", md: "58px" },
            fontWeight: 700,
            px: { xs: 3, md: 0 },
            pt: { xs: 1.5, md: 0 },
          }}
        >
          Benefits We offer.
        </Typography>
        <Typography
            variant="body2"
            color="text.secondary"
            mb={{ xs: 3, md: 4 }}
            sx={{
              fontSize: { xs: "1rem", md: "16px" },
              textAlign: { xs: "left", md: "center" },
              lineHeight: { xs: "1.5rem", md: "24px" },
              fontWeight: 400,
              color: "rgb(120, 120, 120)",
              mx: { xs: 3, md: 50 },
            }}
          >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
          adipisci facilis cupiditate recusandae aperiam temporibus corporis
          itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
          obcaecati, ipsam mollitia hic.
        </Typography>
      </motion.div>

      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "block", md: "flex" },
          height: { xs: "auto", md: "450px" },
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            textColor="inherit"
            onChange={handleChange}
            aria-label="Vertical tabs example"
            TabIndicatorProps={{ style: { display: "none" } }}
            sx={{
              borderColor: "divider",
              minWidth: { xs: 0, md: 400 },
              height: 400,
              backgroundColor: "rgb(206, 210, 213)",
              mx: { xs: 2.5, md: 0 },
              mb: { xs: 3, md: 0 },
              //   pt: 3,
            }}
          >
            <Tab
              sx={{
                bgcolor: value === 0 ? "#1976D2" : "#fff",
                mx: 6,
                my: 2,
                mt: 5,
              }}
              label="Investment in Real Estate"
              textColorSecondary
              {...a11yProps(0)}
            />
            <Tab
              sx={{
                bgcolor: value === 1 ? "#1976D2" : "#fff",
                mx: 6,
                my: 2,
              }}
              label="Investment in Real Estate"
              {...a11yProps(1)}
            />
            <Tab
              sx={{
                bgcolor: value === 2 ? "#1976D2" : "#fff",
                mx: 6,
                my: 2,
              }}
              label="Investment in Real Estate"
              {...a11yProps(2)}
            />
            <Tab
              sx={{
                bgcolor: value === 3 ? "#1976D2" : "#fff",
                mx: 6,
                my: 2,
              }}
              label="Investment in Real Estate"
              {...a11yProps(3)}
            />
          </Tabs>
        </motion.div>
        {/* Tab Panels Right */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <TabPanel
            value={value}
            index={0}
            left={
              <img
                src={Benefit1}
                alt="Benefits"
                style={{ width: "100%", height: "85%", marginTop: "-25px" }}
              />
            }
            right={
              <Box>
                <Typography
                  variant="subtitle1"
                  component="h3"
                  color="primary"
                  gutterBottom
                  sx={{
                    textAlign: { xs: "left", md: "left" },
                    fontSize: { xs: "23px", md: "48px" },
                    lineHeight: { xs: "1.5rem", md: "58px" },
                    fontWeight: 700,
                    pt: { xs: 1.5, md: 0 },
                    mt: { xs: 0, md: -4 },
                  }}
                >
                  Right side content for Item One
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  mb={{ xs: 0, md: 4 }}
                  sx={{
                    fontSize: { xs: "1rem", md: "16px" },
                    textAlign: { xs: "left", md: "left" },
                    lineHeight: { xs: "1.5rem", md: "24px" },
                    fontWeight: 400,
                    color: "rgb(120, 120, 120)",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis amet sequi molestiae tenetur eum mollitia,
                  blanditiis, magnam illo magni error dolore unde perspiciatis
                  tempore et totam corrupti dignissimos aut praesentium?
                </Typography>
              </Box>
            }
          />
          <TabPanel
            value={value}
            index={1}
            left={
              <img
                src={Benefit2}
                alt="Benefits"
                style={{ width: "100%", height: "80%", marginTop: "-25px" }}
              />
            }
            right={
              <Box>
                <Typography
                  variant="subtitle1"
                  component="h3"
                  color="primary"
                  gutterBottom
                  sx={{
                    textAlign: { xs: "left", md: "left" },
                    fontSize: { xs: "23px", md: "48px" },
                    lineHeight: { xs: "1.5rem", md: "58px" },
                    fontWeight: 700,
                    pt: { xs: 1.5, md: 0 },
                    mt: { xs: 0, md: -4 },
                  }}
                >
                  Right side content for Item One
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  mb={{ xs: 0, md: 4 }}
                  sx={{
                    fontSize: { xs: "1rem", md: "16px" },
                    textAlign: { xs: "left", md: "left" },
                    lineHeight: { xs: "1.5rem", md: "24px" },
                    fontWeight: 400,
                    color: "rgb(120, 120, 120)",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis amet sequi molestiae tenetur eum mollitia,
                  blanditiis, magnam illo magni error dolore unde perspiciatis
                  tempore et totam corrupti dignissimos aut praesentium?
                </Typography>
              </Box>
            }
          />
          <TabPanel
            value={value}
            index={2}
            left={
              <img
                src={Benefit3}
                alt="Benefits"
                style={{ width: "100%", height: "90%", marginTop: "-25px" }}
              />
            }
            right={
              <Box>
                <Typography
                  variant="subtitle1"
                  component="h3"
                  color="primary"
                  gutterBottom
                  sx={{
                    textAlign: { xs: "left", md: "left" },
                    fontSize: { xs: "23px", md: "48px" },
                    lineHeight: { xs: "1.5rem", md: "58px" },
                    fontWeight: 700,
                    pt: { xs: 1.5, md: 0 },
                    mt: { xs: 0, md: -4 },
                  }}
                >
                  Right side content for Item One
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  mb={{ xs: 0, md: 4 }}
                  sx={{
                    fontSize: { xs: "1rem", md: "16px" },
                    textAlign: { xs: "left", md: "left" },
                    lineHeight: { xs: "1.5rem", md: "24px" },
                    fontWeight: 400,
                    color: "rgb(120, 120, 120)",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis amet sequi molestiae tenetur eum mollitia,
                  blanditiis, magnam illo magni error dolore unde perspiciatis
                  tempore et totam corrupti dignissimos aut praesentium?
                </Typography>
              </Box>
            }
          />
          <TabPanel
            value={value}
            index={3}
            left={
              <img
                src={Benefit4}
                alt="Benefits"
                style={{ width: "100%", height: "80%", marginTop: "-25px" }}
              />
            }
            right={
              <Box>
                <Typography
                  variant="subtitle1"
                  component="h3"
                  color="primary"
                  gutterBottom
                  sx={{
                    textAlign: { xs: "left", md: "left" },
                    fontSize: { xs: "23px", md: "48px" },
                    lineHeight: { xs: "1.5rem", md: "58px" },
                    fontWeight: 700,
                    pt: { xs: 1.5, md: 0 },
                    mt: { xs: 0, md: -4 },
                  }}
                >
                  Right side content for Item One
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  mb={{ xs: 0, md: 4 }}
                  sx={{
                    fontSize: { xs: "1rem", md: "16px" },
                    textAlign: { xs: "left", md: "left" },
                    lineHeight: { xs: "1.5rem", md: "24px" },
                    fontWeight: 400,
                    color: "rgb(120, 120, 120)",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis amet sequi molestiae tenetur eum mollitia,
                  blanditiis, magnam illo magni error dolore unde perspiciatis
                  tempore et totam corrupti dignissimos aut praesentium?
                </Typography>
              </Box>
            }
          />
        </motion.div>
      </Box>
    </Box>
  );
}
