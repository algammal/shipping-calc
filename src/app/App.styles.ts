import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const AppContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export const SidebarWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  width: '100%',
  [theme.breakpoints.up('md')]: {
    padding: '4rem',
    width: '360px',
    flexShrink: 0,
  },
}));

export const MainContentWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
  background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.common.white})`,
  [theme.breakpoints.up('md')]: {
    padding: '4rem',
  },
}));

export const QuoteResultsWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));
