import { Box, Stack, styled, Typography } from "@mui/material";
import { Wrapper } from "../../shared/Wrapper";

import content from "../content/experiences.json";

function ExperienceSection() {
    const ExperienceContainer = styled(Box)(() => ({
        width: '100%',
        height: 'auto',
        marginTop: '5em',
        position: 'relative',
        backgroundColor: '#1D7FC6'
    }));

    return (
        <ExperienceContainer id="experience">
            <Wrapper>
                <Typography
                    sx={{
                        color: "white",
                        fontSize: "1.8em",
                        fontFamily: "Nunito, sans-serif",
                        fontWeight: 600
                    }}
                >
                    Experience
                </Typography>

                <Box sx={{ marginTop: "2em" }}>
                    {content.languages.map(tag => (
                        <Stack
                            sx={{
                                display: "inline-flex",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "0.25em",
                                borderRadius: "0.25em",
                                backgroundColor: "white",
                                color: "#1D7FC6"
                            }}
                            gap={1}
                            direction="row"
                        >
                            <Typography
                                sx={{
                                    width: "70%",
                                    height: "100%",
                                    padding: "0.15em 0.5em",
                                    fontWeight: 600,
                                    fontFamily: "Nunito, sans-serif"
                                }}
                            >
                                {tag.language}
                            </Typography>
                            <Typography
                                sx={{
                                    height: "100%",
                                    color: "white",
                                    backgroundColor: "#282828",
                                    padding: "0.15em 0.5em",
                                    borderRadius: "0 0.25em 0.25em 0",
                                    fontWeight: 700,
                                    fontFamily: "Nunito, sans-serif"
                                }}
                            >
                                {tag.ex}
                            </Typography>
                        </Stack>
                    ))}
                </Box>
            </Wrapper>
        </ExperienceContainer>
    )
}

export default ExperienceSection