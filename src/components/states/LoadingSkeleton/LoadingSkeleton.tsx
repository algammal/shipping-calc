import { Box, Typography, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function LoadingSkeleton() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Searching Couriers...
      </Typography>
      <Grid container spacing={2}>
        {[1, 2, 3].map((n) => (
          <Grid key={n} size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
            <Skeleton variant="rounded" width="100%" height={200} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
