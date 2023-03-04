import {Box, Stack, Typography} from "@mui/material";
import Photo from "../../images/me.jpg"


export const AboutMe = () => {
  return (
      <Stack
          direction="row"
          spacing={2}
          sx={{
            backgroundColor: 'rgba(232,232,232,0.67)',
            padding: '2em 1em',
            borderRadius: '0.25em'
          }}
      >
        <Box>
          <img
              src={Photo}
              style={{
                width: '5em',
                height: '5em',
                borderRadius: '2.5em'
              }}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: 700,
              color: '#282828',
              opacity: 0.9,
              fontFamily: 'Nunito, sans-serif'
            }}
          >
            ABOUT ME
          </Typography>
          <Typography
            sx={{
              fontSize: '0.9em',
              color: '#282828',
              opacity: 0.8,
              fontFamily: 'Nunito, sans-serif'
            }}
          >
            I am full stack developer based on Campina Grande - PB (Brazil). I've graduated from 
            the Federal University of Campina Grande. I am most interested in Fullstack development 
            and Data Analysis. My languages of choice are Javascript, Java, Python and R.
          </Typography>
        </Box>
      </Stack>
  )
}