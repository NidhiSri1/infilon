import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import checkIcon from "../../assets/checkIcon.svg";
import checkSelected from "../../assets/checkSelected.svg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useTheme } from "@emotion/react";
let data = [
  {
    plan: "Free",
    amount: "$0",
    description: " Capture ideas and find them quickly",
    list: [
      " Sync unlimited devices",
      " 10 GB monthly uploads",
      " 200 MB max. note size",
      " Customize Home dashboard and access extra widgets",
      " Connect primary Google Calendar account",
      " Add due dates, reminders, and notifications to your tasks",
    ],
  },
  {
    plan: "Personal",
    amount: "$11.99",
    description: "Keep home and family on track",
    list: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
  },
  {
    plan: "Organization",
    amount: "$49.99",
    description: "Capture ideas and find them quickly",
    list: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
  },
];

function ChoosePlan() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid container spacing={3} justifyContent="center">
        {!isSmallScreen &&
          data.map((item, index) => (
            <Grid item xs={12} sm={3} md={4} key={index}>
              <Card
                variant="outlined"
                sx={{
                  padding: 2,
                  ...(index !== 1 && {
                    borderColor: "#FFE492",
                  }),
                  ...(index === 1 && {
                    backgroundColor: "#1e3a8a",
                    color: "#ffffff",
                  }),
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      ...(index === 1 && {
                        color: "#ffffff",
                      }),
                    }}
                  >
                    {item.plan}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    sx={{
                      ...(index === 1 && {
                        color: "#FFE492",
                      }),
                    }}
                  >
                    {item.amount}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{
                      marginBottom: 2,
                      ...(index === 1 && {
                        color: "#ffffff",
                      }),
                    }}
                  >
                    {item.description}
                  </Typography>
                  <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                    {item.list.map((lists, listIndex) => (
                      <Box
                        key={listIndex}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "5%",
                        }}
                      >
                        <img
                          src={index === 1 ? checkSelected : checkIcon}
                          style={{ width: "16px", marginRight: "2%" }}
                          alt="check icon"
                        />
                        <li>{lists}</li>
                      </Box>
                    ))}
                  </ul>
                  <Button
                    variant={index === 1 ? "contained" : "outlined"}
                    fullWidth
                    sx={{
                      width: "50%",
                      marginTop: 2,
                      ...(index === 1 && {
                        color: "#ffffff",
                      }),
                      textTransform: "none",
                    }}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}

        {isSmallScreen ? (
          <AliceCarousel
            style={{ display: "none" }}
            mouseTracking
            items={data.map((item, index) => {
              return (
                <Grid item xs={12} sm={12} md={4}>
                  <Card
                    variant="outlined"
                    sx={{
                      padding: 2,
                      ...(index !== 1 && {
                        borderColor: "#FFE492",
                      }),

                      ...(index === 1 && {
                        backgroundColor: "#1e3a8a",
                        color: "#ffffff",
                      }),
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          ...(index === 1 && {
                            color: "#ffffff",
                          }),
                        }}
                      >
                        {item.plan}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="textPrimary"
                        sx={{
                          ...(index === 1 && {
                            color: "#FFE492",
                          }),
                        }}
                      >
                        {item.amount}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        sx={{
                          marginBottom: 2,
                          ...(index === 1 && {
                            color: "#ffffff",
                          }),
                        }}
                      >
                        {item.description}
                      </Typography>
                      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                        {item.list.map((lists) => {
                          return (
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "5%",
                              }}
                            >
                              <img
                                src={index === 1 ? checkSelected : checkIcon}
                                style={{ width: "16px", marginRight: "2%" }}
                              ></img>
                              <li>{lists}</li>
                            </Box>
                          );
                        })}
                      </ul>
                      <Button
                        variant={index == 1 ? "contained" : "outlined"}
                        fullWidth
                        sx={{
                          width: "50%",
                          marginTop: 2,
                          ...(index === 1 && {
                            color: "#ffffff",
                          }),
                          textTransform: "none",
                        }}
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          />
        ) : (
          ""
        )}
      </Grid>
    </Container>
  );
}

export default ChoosePlan;
