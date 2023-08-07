import GitHubIcon from '@mui/icons-material/GitHub';
import { Fade, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import React from 'react';
import { AnimatedRightArrow, CardContainer, ExploreButton, Image } from './index.styles';
import { useTranslation } from 'react-i18next';

export function WorkCard ({ work }) {
  const [hover, setHover] = React.useState(false);
  const { t } = useTranslation();

  return (
    <Grid item xs={12} sm={6} md={3} lg={2.4}>
      <CardContainer onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <Stack
          sx={{
            minWidth: '160px',
            minHeight: '160px',
            backgroundColor: work.bg,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image src={work.image} alt={work.description} />
        </Stack>

        <Fade in={hover} timeout={300}>
          <Stack
            sx={{
              minWidth: '100%',
              minHeight: '160px',
              background: 'linear-gradient(90deg, rgba(224, 81, 20, 0.85) 0%, rgba(144, 34, 197, 0.85) 100%)',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
            }}
            gap={2}
          >
            <GitHubIcon
              sx={{
                color: 'white',
                width: '50px',
                height: '50px',
              }}
            />
            <ExploreButton
              sx={{ color: 'white', borderColor: 'white' }}
              size="small"
              variant="outlined"
              endIcon={AnimatedRightArrow}
              target="_blank"
              href={work.link}
            >
              {t('portfolio.works.explore')}
            </ExploreButton>
          </Stack>
        </Fade>
      </CardContainer>
    </Grid>
  );
}
