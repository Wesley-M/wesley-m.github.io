import {alpha, Box, Stack, styled, Typography} from "@mui/material";
import Photo from "../../images/me.jpg"
import content from '../../content/about.json'
import {AboutContainer, AboutContent, AboutImage, AboutTitle} from "./AboutMe.styles";

export const AboutMe = () => {
  return (
      <AboutContainer>
        <Box>
          <AboutImage src={Photo} alt="Author's profile image"/>
        </Box>
        <Box>
          <AboutTitle>ABOUT ME</AboutTitle>
          <AboutContent>{content.about.join("\n")}</AboutContent>
        </Box>
      </AboutContainer>
  )
}
