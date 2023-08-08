import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.main,
  fontSize: 18,
  fontWeight: 600,
  textTransform: 'uppercase',
  borderBottom: `1px solid ${theme.palette.text.main}BB`,
  borderWidth: 2,
  marginBottom: '1em',
}));
