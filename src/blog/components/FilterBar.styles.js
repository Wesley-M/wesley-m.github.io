import {alpha, Grid, InputBase, styled, Typography} from "@mui/material";

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  marginLeft: 0,
  width: '100%',
  '& .MuiSvgIcon-root': {
    fill: theme.palette.secondary.main
  },
  '& .MuiInputBase-input': {
    color: theme.palette.text.main
  }
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  borderRadius: theme.shape.borderRadius,
  border: `2px solid ${alpha(theme.palette.text.main, 0.1)}`,
  '&.Mui-focused': {
    border: `2px solid  ${theme.palette.secondary.main}`,
  },
  '&.MuiInputBase-root': {
    width: '100%',
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: 'inherit',
  },
}));

export const TagContainer = styled(Grid, {
  shouldForwardProp: (prop) => prop !== "selected"
})(({ theme, selected }) => ({
  padding: '0 0.4em',
  margin: '0.2em',
  borderRadius: '0.2em',
  fontWeight: 'bold',
  border: `2px solid ${selected ? theme.palette.secondary.main : alpha(theme.palette.text.main, 0.1)}`,
  backgroundColor: selected ? theme.palette.secondary.main : alpha(theme.palette.text.main, 0.05),
  '&:hover': {
    cursor: 'pointer'
  },
}));

export const Tag = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "selected"
})(({ theme, selected }) => ({
  color: selected ? 'white' : alpha(theme.palette.text.main, 0.6)
}));