import React from "react";
import {Box, Grid, Link, Stack, styled, Typography} from "@mui/material";

import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function WorkCard({ img, title, description }) {
    const Image = styled("img")(() => ({
        width: "100%",
        height: "100%"
    }));

    return (
        <Grid container sx={{ margin: "1.5em 0em", boxShadow: 2 }}>
            <Grid item xs={12} sm={5} md={3}>
                <Image width="fit-content" src={img} alt="Work card"/>
            </Grid>
            <Grid item xs={12} sm={7} md={9}>
                <Stack
                    direction="column"
                    sx={{
                        padding: "0.8em 0",
                        marginLeft: "1.5em",
                        paddingRight: "1.5em",
                        height: "100%"
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: "600",
                            fontSize: "1.5em",
                            color: "#282828",
                            fontFamily: "Nunito, sans-serif"
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            marginTop: "0.4em",
                            fontWeight: "400",
                            color: "#28282870",
                            fontFamily: "Nunito, sans-serif",
                            fontSize: { xs: "1em", sm: "1.1em", md: "1.15em", lg: "1.2em" }
                        }}
                    >
                        {description}
                    </Typography>

                    <Box sx={{ flexGrow: 1 }}/>

                    <Stack sx={{ marginTop: "1em" }} direction="row" alignItems="center" gap={1}>
                        <Link
                            target="_blank"
                            href="http://beeper.netlify.app"
                            sx={{
                                fontFamily: "Nunito, sans-serif",
                                fontSize: "1.3em",
                                fontWeight: 600,
                                textDecoration: "none",
                                color: "#1D7FC6"
                            }}
                        >
                            Link
                        </Link>
                        <OpenInNewIcon style={{ color: "#1D7FC6" }}/>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default WorkCard