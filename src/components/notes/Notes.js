import { Box, Button, Container, Typography } from "@mui/material";
import Element from "../../assets/BACKGROUND.png";

function Notes() {
  return (
    <Box
      sx={{
        backgroundColor: "#043873",
        backgroundImage: `url(${Element})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Box
          sx={{
            padding: "6%",
            marginTop: "4%",
            display: "flex",
            justifyContent: "center",
            alignItems: { md: "center", sm: "flex-start" },
            flexDirection: "column",
            gap: 2,
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
              textAlign: {
                xs: "center",
                sm: "center",
                md: "left",
              },
            }}
          >
            Your work, everywhere you are
          </Typography>
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
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </Typography>
          <Button
            variant="contained"
            sx={{ textTransform: "none", color: "white" }}
          >
            Try Taskey
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Notes;
