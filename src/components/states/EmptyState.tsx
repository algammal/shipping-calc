import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const EmptyStateContainer = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(4),
  textAlign: "center",
  backgroundColor: "#f5f8ff",
  borderRadius: theme.shape.borderRadius,
}));


export default function EmptyState() {
  return (
    <EmptyStateContainer spacing={2}>
      <Typography variant="h5" color="text.secondary">
        No quotes available
      </Typography>
      <Typography color="text.secondary">
        We couldn't find any couriers for the selected route. Try adjusting the
        destination or package dimensions.
      </Typography>
    </EmptyStateContainer>
  );
}
