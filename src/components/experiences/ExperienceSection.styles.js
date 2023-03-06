import {alpha, Box, styled, Typography} from "@mui/material";

export const ExperienceContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  position: 'relative',
  backgroundColor: theme.palette.secondary.main,
  padding: '1em 0'
}));

export const Section = styled(Typography)(({theme}) => ({
  color: theme.colors.experiences.text,
  fontSize: "1.8em",
  fontWeight: 600,
  margin: "0 1em 0 0"
}));

export const SubSection = styled(Typography)(({theme}) => ({
  color: alpha(theme.colors.experiences.text, 0.8),
  fontSize: "1.2em",
  fontWeight: 500,
  marginTop: "0.8em",
  textTransform: "capitalize"
}));

export const Tags = styled(Box)(({theme}) => ({
  marginTop: "0.25em"
}));

export const Tag = styled(Box)(({theme}) => ({
  display: "inline-flex",
  placeItems: "center",
  margin: "0.25em",
  borderRadius: "0.25em",
  backgroundColor: theme.palette.text.main,
  flexDirection: "row",
  width: "auto"
}));

export const Language = styled(Typography)(({theme}) => ({
  width: "fit-content",
  height: "100%",
  padding: "0.15em 0.5em",
  fontWeight: 600,
  color: theme.palette.primary.main,
}))

export const Experience = styled(Typography)(({theme}) => ({
  height: "100%",
  color: theme.palette.text.main,
  backgroundColor: theme.palette.primary.main,
  padding: "0.15em 0.5em",
  borderRadius: "0 0.25em 0.25em 0",
  fontWeight: 700
}))