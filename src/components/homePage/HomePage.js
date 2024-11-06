import { Container, Box, Typography, Button } from "@mui/material";
import Home from "../../assets/homeImage.svg";
import Element from "../../assets/Element.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function HomePage() {
  return (
    <Box
      sx={{
        backgroundColor: "#043873",
        backgroundImage: `url(${Element})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "30px",
                  md: "35px",
                  lg: "40px",
                },
                color: "white",
                lineHeight: "90%",
                marginBottom: "4%",

                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "left",
                },
              }}
            >
              Get More Done with whitepace
            </Typography>
            <Typography
              sx={{
                color: "white",
                marginBottom: "4%",
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "left",
                },
              }}
            >
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                variant="contained"
                color="info"
                sx={{
                  fontWeight: 400,
                  fontSize: {
                    lg: "12px",
                    md: "10px",
                    xs: "8px",
                  },
                  display: "flex",
                  textTransform: "none",
                  alignSelf: {
                    sm: "center",
                    md: "flex-start",
                  },
                }}
                endIcon={<ArrowForwardIosIcon />}
              >
                Try Whitepace free
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              width: {
                sm: "70%",
                md: "80%",
                lg: "100%",
              },
            }}
          >
            <img src={Home} style={{ width: "100%" }}></img>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;
