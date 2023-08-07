import { Box, Stack, styled } from '@mui/material';

export const SidebarContainer = styled(Box)(({ theme }) => ({
  'margin': '1em 3em',
  'width': '50vw',
  '& .MuiDivider-root': {
    backgroundColor: theme.palette.secondary.main,
  },
  '& .MuiListItemText-root .MuiTypography-root': {
    fontSize: '1.2em',
  },
}));

export const SidebarHeader = styled(Stack)(({ theme }) => ({
  justifyContent: 'flex-end',
  flexDirection: 'row',
  gap: '1em',
}));

export const SidebarContent = styled(Box)(({ theme }) => ({
  marginTop: '5em',
}));
