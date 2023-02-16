import {useContext} from 'react'

import Typed from './Typed'

import MessageIcon from '@mui/icons-material/Message';
import {ReactComponent as ArrowIcon} from '../../static/icons/Arrow.svg'

import {ContentContext} from '../../contexts/ContentContext'
import {ThemeContext} from '../../contexts/ThemeContext'
import {Box, Button, IconButton, Stack, styled, Typography, useTheme} from "@mui/material";

function HeroSection() {

  const {variant} = useContext(ThemeContext)
  const {content} = useContext(ContentContext)
  const theme = useTheme();

  const HeroContainer = styled(Box)(() => ({
    width: '100%',
    height: '100vh',
    marginTop: '5em',
    position: 'relative'
  }));

  const Slogan = styled(Typography)(() => ({
    margin: 0,
    color: '#282828BB',
    fontWeight: 'normal',
    marginTop: '0.7em',
    fontSize: '5em',
    lineHeight: '1.2em',
    fontFamily: 'Bree Serif',
    [theme.breakpoints.down('md')]: {
      fontSize: '4em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '3.5em',
    }
  }));

  const Profession = styled(Typography)(() => ({
    fontSize: '1.2em',
    margin: 0,
    marginTop: '1em',
    color: '#383838',
    '& .arrow': {
      width: '2.5em',
      height: '1.6em',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.1em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
    }
  }));

  const SocialIcon = styled(IconButton)(() => ({
    backgroundColor: "#282828",
    color: 'white'
  }));

  const Description = styled(Typography)(() => ({
    marginTop: '2em',
    marginBottom: '1.5em',
    fontSize: '1.2em',
    fontFamily: 'Nunito, sans-serif',
    opacity: 0.6,
    [theme.breakpoints.down('md')]: {
      fontSize: '1.1em',
    }
  }));

  return (
      <HeroContainer id="home">
        <Slogan>
          {content.hero["slogan"]}
          <Typed
              text={content.hero["slogan-options"]}
              color="#9236EF"
          />
        </Slogan>

        <Profession>
          <Stack direction="row" gap={2} sx={{alignItems: 'center'}}>
            <Stack direction="row" gap={1} sx={{alignItems: 'center'}}>
              <ArrowIcon className="arrow"/>
              <Typography
                  sx={{
                    fontFamily: 'Bree Serif',
                    fontSize: '1.2em'
                  }}
              >
                {content.hero["profession"]}
              </Typography>
            </Stack>
          </Stack>
        </Profession>

        <Description>
          {content.hero["briefDescription"]}
        </Description>

        <Stack
            direction="row"
            gap={2}
            sx={{
              marginTop: '1em'
            }}
        >
          <Button
              variant="contained"
              startIcon={<MessageIcon/>}
              sx={{
                width: 'fit-content',
                backgroundColor: '#282828',
                borderRadius: '5em',
                textTransform: 'capitalize'
              }}
              disableElevation
          >
            Let's Talk
          </Button>
        </Stack>
      </HeroContainer>
  )
}

export default HeroSection