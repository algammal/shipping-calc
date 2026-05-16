import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

export const EmptyStateContainer = styled(Stack)(({ theme }) => ({
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(4),
    textAlign: "center",
    backgroundColor: "#f5f8ff",
    borderRadius: theme.shape.borderRadius,
}));
