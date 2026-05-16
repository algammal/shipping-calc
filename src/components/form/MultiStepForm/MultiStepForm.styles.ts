import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export const FormWrapper = styled(Box)(() => ({
  maxWidth: "100%",
}));

export const ActionContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const FormButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginRight: theme.spacing(1),
}));

export const FinalPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));
