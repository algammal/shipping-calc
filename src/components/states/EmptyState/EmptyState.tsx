import { Typography } from "@mui/material";
import { EmptyStateContainer } from "./EmptyState.styles";

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
