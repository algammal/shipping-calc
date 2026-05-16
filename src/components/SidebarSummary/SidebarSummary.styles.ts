import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

export const HighlightBox = styled(Stack)(({ theme }) => ({
    display: 'flex',
    alignItems: 'baseline',
    flexFlow: 'column',
    marginBottom: theme.spacing(3),
    padding: '5px 10px',
    borderRadius: '20px',
    backgroundColor: '#f5f8ff',
}));
