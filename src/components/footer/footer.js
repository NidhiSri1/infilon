import { Container, Typography, Box, Button, Grid, Divider } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import micro from "../../assets/micro.svg";
import whiteApple from "../../assets/whiteApple.svg";
import android from "../../assets/android.svg";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#043873" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "30px",
                md: "35px",
                lg: "40px",
              },
              color: "white",
              lineHeight: "90%",
              paddingTop: "4%",
              textAlign: "center",
            }}
          >
            Try Whitepace <br />
            today
          </Typography>
          <Typography
            sx={{
              color: "white",
              textAlign: "center",
            }}
          >
            Get started for free.
            <br /> Add your whole team as your needs grow.
          </Typography>
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
            }}
            endIcon={<ArrowForwardIosIcon />}
          >
            Try Whitepace free
          </Button>
          <Typography
            sx={{
              color: "white",
              textAlign: {
                xs: "center",
                sm: "center",
                md: "left",
              },
            }}
          >
            On a big team? Contact sales
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "8%",
              }}
            >
              <img style={{ maxWidth: "60%" }} src={whiteApple}></img>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "8%",
              }}
            >
              <img style={{ maxWidth: "60%" }} src={micro}></img>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "8%",
              }}
            >
              <img style={{ maxWidth: "60%" }} src={android}></img>
            </Box>
          </Box>
        </Box>

        <Grid container spacing={4} justifyContent="center" mt="5%" mb="5%">
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color:"white" }}>
              Whitespace
            </Typography>
            <Typography variant="body2" sx={{ mt: 2,color:"white" }}>
              Whitespace was created for the new ways we live and work. We make
              a better workspace around the world.
            </Typography>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ color:"white" }}>
              Product
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" sx={{color:"white"}}>Overview</Typography>
              <Typography variant="body2" sx={{ mt: 1,color:"white" }}>
                Pricing
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 ,color:"white"}}>
                Customer stories
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ color:"white" }}>
              Resources
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" sx={{color:"white"}}>Blog</Typography>
              <Typography variant="body2" sx={{ mt: 1,color:"white" }}>
                Guides & tutorials
              </Typography>
              <Typography variant="body2" sx={{ mt: 1,color:"white" }}>
                Help center
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ color:"white" }}>
              Company
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" sx={{color:"white"}}>About us</Typography>
              <Typography variant="body2" sx={{ mt: 1 ,color:"white"}}>
                Careers
              </Typography>
              <Typography variant="body2" sx={{ mt: 1,color:"white" }}>
                Media kit
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} textAlign="center">
            <Typography variant="h6" sx={{ color:"white" }}>
              Try It Today
            </Typography>
            <Typography variant="body2" sx={{ mt: 2,color:"white" }}>
              Get started for free. Add your whole team as your needs grow.
            </Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#0072e6", mt: 2 }}
            >
              Start today →
            </Button>
          </Grid>
        </Grid>
        <Divider></Divider>
    
      </Container>
    </Box>
  );
}

export default Footer;
