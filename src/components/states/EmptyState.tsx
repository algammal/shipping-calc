import { Stack, Typography } from "@mui/material";

export default function EmptyState() {
  return (
    <Stack
      spacing={2}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        p: 4,
        textAlign: "center",
        bgcolor: "#f5f8ff",
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" color="text.secondary">
        No quotes available
      </Typography>
      <Typography color="text.secondary">
        We couldn't find any couriers for the selected route. Try adjusting the
        destination or package dimensions.
      </Typography>
    </Stack>
  );
}
