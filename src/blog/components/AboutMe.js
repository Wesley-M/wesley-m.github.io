import {Box, Stack, Typography} from "@mui/material";
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
          {/*<img*/}
          {/*    src={Photo}*/}
          {/*    style={{*/}
          {/*      width: '5em',*/}
          {/*      height: '5em',*/}
          {/*      borderRadius: '0.25em'*/}
          {/*    }}*/}
          {/*/>*/}
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
            I am a student of Computer Science at the Federal University of Campina Grande.
            My interests are varied, but orbit around Fullstack development, Data Analysis
            and Distributed Systems. My languages of choice - that I am most experienced with
            -  are Javascript, Java, Python and R.
          </Typography>
        </Box>
      </Stack>
  )
}