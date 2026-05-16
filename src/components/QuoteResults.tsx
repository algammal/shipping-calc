import { useQuote } from "../hooks/useQuote";
import { useCallQuotes } from "../hooks/useCallQuotes";
import CourierCard from "./CourierCard";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

function QuoteResults() {
  const { state } = useQuote();
  const { getQuotes } = useCallQuotes();

  if (state.loading) {
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

  if (state.error) {
    return (
      <Alert
        severity="error"
        action={
          <Button color="inherit" size="small" onClick={() => getQuotes(state)}>
            RETRY
          </Button>
        }
      >
        {state.error}
      </Alert>
    );
  }

  if (!state.quotes || state.quotes.length === 0) {
    return (
      <Stack alignItems="center" justifyContent="center" spacing={2} sx={{ p: 4, textAlign: 'center', bgcolor: '#f5f8ff', borderRadius: 2 }}>
        <Typography variant="h5" color="text.secondary">No quotes available</Typography>
        <Typography color="text.secondary">We couldn't find any couriers for the selected route. Try adjusting the destination or package dimensions.</Typography>
      </Stack>
    );
  }

  // Find cheapest & fastest
  const minTotal = Math.min(...state.quotes.map((q: any) => q.total));
  const minEta = Math.min(...state.quotes.map((q: any) => q.eta));

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Quote Results
      </Typography>

      {/* MUI v6 Grid */}
      <Grid container spacing={2} columns={12}>
        {state.quotes.map((q: any) => {
          const isCheapest = q.total === minTotal;
          const isFastest = q.eta === minEta;

          return (
            <Grid key={q.id} size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
              <CourierCard
                quote={q}
                isCheapest={isCheapest}
                isFastest={isFastest}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default QuoteResults;