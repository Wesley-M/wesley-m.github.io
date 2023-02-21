import {Box, Grid, keyframes, Stack, styled, Typography, useTheme} from "@mui/material";

import { ReactComponent as WavingHandIcon } from '../../images/waving-hand.svg';

import photo from "../../images/me.jpg"
import Typed from "./Typed";

function HeroSection() {
  const theme = useTheme();

  const HeroContainer = styled(Box)(() => ({
    width: '100%',
    height: { xs: '90vh', sm: '60vh', md: '60vh', lg: '40vh' },
    marginTop: '5em',
    position: 'relative'
  }));

  const Name = styled(Typography)(() => ({
    fontSize: "1.9em",
    fontFamily: "Nunito, sans-serif",
    fontWeight: 700
  }));

  const Occupation = styled(Typography)(() => ({
    fontSize: "1.4em",
    fontFamily: "Nunito, sans-serif",
    fontWeight: 600,
    color: "#1D7FC6",
    marginTop: "0.5em"
  }));

  const Image = styled("img")(() => ({
    width: "16em",
    height: "16em",
    borderRadius: "1em"
  }));

  const TypedText = styled(Typography)(() => ({
    margin: 0,
    height: '1em',
    width: 'auto',
    fontSize: '1.3em',
    fontWeight: 400,
    fontFamily: 'Nunito, sans-serif',
    textAlign: "center",
      [theme.breakpoints.up('md')]: {
          textAlign: 'left',
      },
    fontStyle: 'italic'
  }));

  const spin = keyframes`
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(-25deg);
      }
      to {
        transform: rotate(0deg);
      }
  `;

  return (
      <HeroContainer id="home">
          <Grid container spacing={2}>
            <Grid
                item
                xs={12} sm={12} md={4} lg={3}
                sx={{
                    width: "2em",
                    height: "fit-content",
                    minHeight: "2em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Image src={photo} alt="My photo" />
            </Grid>
            <Grid
                item
                xs={12} sm={12} md={8} lg={9}
                sx={{
                    display: "flex",
                    justifyContent: { xs: "center", sm: "center", md: "left", lg: "left" }
                }}
            >
              <Stack
                  direction="column"
                  sx={{
                      marginLeft: {md: "1.5em"}
                  }}
              >
                <Name
                    sx={{
                        textAlign: { xs: "center", sm: "center", md: "left", lg: "left" }
                    }}
                >
                    Wesley Santos
                </Name>
                <Occupation
                    sx={{
                        textAlign: { xs: "center", sm: "center", md: "left", lg: "left" }
                    }}
                >
                    Full Stack Web Developer
                </Occupation>
                <Box
                  sx={{
                    height: "7em",
                    marginTop: "1em",
                    borderLeft: { md: "4px solid #282828", lg: "4px solid #282828" },
                    padding: "1em 1em"
                  }}
                >
                    <TypedText
                        sx={{
                            marginBottom: "1em" ,
                            textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
                        }}
                    >
                        Hi!
                        <Typography
                            component="span"
                            sx={{
                                top: "0.25em",
                                position: "relative",
                                marginLeft: "0.75em",
                                width: "fit-content",
                                display: "inline-flex",
                                animation: `${spin} 3s ease-out infinite`
                            }}
                        >
                            <WavingHandIcon/>
                        </Typography>
                    </TypedText>
                  <Typed
                      type={[
                          "Let's create awesome experiences!",
                          "Let's create something fancy!",
                          "Let's build a new WEB."
                      ]}
                      RenderComponent={TypedText}
                  />
                </Box>
              </Stack>
            </Grid>
          </Grid>
      </HeroContainer>
  )
}

export default HeroSection