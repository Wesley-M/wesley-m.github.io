import GitHubIcon from '@mui/icons-material/GitHub';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { Grid, IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import React from 'react';
import { CardContainer } from './index.styles';

export function WorkCard ({ work }) {
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
            borderRadius: '0.5em',
            border: '2px solid #ffffff10',
          }}
        >
          <img style={{ height: work.height, width: '70%' }} src={work.image} alt={work.description} />

          <Stack direction="row" marginTop={2} gap={1}>
            {work.github && (
              <IconButton href={work.github} target="_blank" sx={{ 'opacity': 0.8, 'border': '1px solid white', 'width': 30, 'height': 30, '&:hover': { opacity: 1 } }}>
                <GitHubIcon sx={{ color: 'white' }}/>
              </IconButton>
            )}
            <IconButton href={work.link} target="_blank" sx={{ 'opacity': 0.8, 'border': '1px solid white', 'width': 30, 'height': 30, '&:hover': { opacity: 1 } }}>
              <CallMadeIcon sx={{ color: 'white' }}/>
            </IconButton>
          </Stack>
        </Stack>
      </CardContainer>
    </Grid>
  );
}
