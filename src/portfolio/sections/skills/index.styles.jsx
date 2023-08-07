import { alpha, Box, styled, Typography } from '@mui/material';

export const SkillContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  position: 'relative',
  padding: '1em 0',
}));

export const SubSection = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.text.main, 0.8),
  fontSize: '1.2em',
  fontWeight: 500,
  marginTop: '1em',
  textTransform: 'capitalize',
}));

export const Tags = styled(Box)(({ theme }) => ({
  marginTop: '0.25em',
}));

export const Tag = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  placeItems: 'center',
  margin: '0.25em',
  borderRadius: '0.5em',
  border: `2px solid ${theme.palette.text.main}44`,
  flexDirection: 'row',
  width: 'auto',
  padding: '0 0.5em',
}));

export const Language = styled(Typography)(({ theme }) => ({
  width: 'fit-content',
  height: '100%',
  padding: '0.1em 0.5em',
  fontWeight: 600,
  color: theme.palette.text.main,
}));

export const Skill = styled(Typography)(({ theme }) => ({
  height: '100%',
  color: theme.palette.primary.main,
  fontSize: '0.7em',
  padding: '0.15em 0.5em',
  borderRadius: '2em',
  fontWeight: 700,
  backgroundColor: theme.palette.text.main,
}));
