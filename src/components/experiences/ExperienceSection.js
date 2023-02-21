import {Box, styled, Typography} from "@mui/material";
import {Wrapper} from "../../shared/Wrapper";

function ExperienceSection() {
    const ExperienceContainer = styled(Box)(() => ({
        width: '100%',
        height: '30vh',
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
                    {["JAVA", "PYTHON", "JAVASCRIPT"].map(tag => (
                        <Typography
                            sx={{
                                display: "inline-flex",
                                padding: "0.1em 1.25em",
                                marginRight: "0.5em",
                                borderRadius: "0.25em",
                                backgroundColor: "white",
                                color: "#1D7FC6",
                                fontWeight: 600,
                                fontFamily: "Nunito, sans-serif"
                            }}
                        >
                            {tag}
                        </Typography>
                    ))}
                </Box>
            </Wrapper>
        </ExperienceContainer>
    )
}

export default ExperienceSection