import { useQuote } from "../hooks/useQuote";
import CourierCard from "./CourierCard";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function QuoteResults() {
  const { state } = useQuote();

  if (!state.quotes || state.quotes.length === 0) {
    return (
      <div>
        <Typography variant="h5">Quote Results</Typography>
        <Typography>No quotes available for the selected shipment.</Typography>
      </div>
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
            <Grid key={q.id} xs={12} sm={6} md={3}>
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