import { Box, Container, Typography } from "@mui/material";
import google from "../../assets/google.svg";
import microsoft from "../../assets/microsoft.svg";
import slack from "../../assets/slack.svg";
import apple from "../../assets/apple.svg";

function Sponsors() {
  return (
    <Container>
      <Box
        mt="3%"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "30px",
              md: "35px",
              lg: "40px",
            },
          }}
        >
          Our sponsors
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            flexDirection: { sm: "row", xs: "column", md: "row" },
          }}
          mt="3%"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "8%",
            }}
          >
            <img style={{ maxWidth: "60%" }} src={apple}></img>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "8%",
            }}
          >
            <img
              style={{ maxWidth: "50%", alignSelf: "center" }}
              src={microsoft}
            ></img>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "8%",
            }}
          >
            <img style={{ maxWidth: "60%" }} src={slack}></img>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "8%",
            }}
          >
            <img style={{ maxWidth: "60%" }} src={google}></img>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Sponsors;
