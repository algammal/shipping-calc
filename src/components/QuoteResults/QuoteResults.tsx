import { useMemo } from "react";
import { useQuote } from "../../hooks/useQuote";
import { useCallQuotes } from "../../hooks/useCallQuotes";
import type { QuoteResponse } from "../../types/quote.types";
import CourierCard from "../CourierCard";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LoadingSkeleton from "../states/LoadingSkeleton";
import ErrorState from "../states/ErrorState";
import EmptyState from "../states/EmptyState";
import { ResultsWrapper } from "./QuoteResults.styles";

function QuoteResults({
  isSearched,
}: {
  isSearched: boolean;
}) {
  const { state } = useQuote();
  const { getQuotes } = useCallQuotes();

  const { minTotal, minEta } = useMemo(() => {
    if (!state.quotes || state.quotes.length === 0) {
      return { minTotal: 0, minEta: 0 };
    }
    return {
      minTotal: Math.min(...state.quotes.map((q) => q.total)),
      minEta: Math.min(...state.quotes.map((q) => q.eta)),
    };
  }, [state.quotes]);

  if (state.loading) {
    return <LoadingSkeleton />;
  }

  if (state.error) {
    return <ErrorState error={state.error} onRetry={() => getQuotes(state)} />;
  }

  if (isSearched && (!state.quotes || state.quotes.length === 0)) {
    return <EmptyState />;
  }

  return (
    <ResultsWrapper>
      {
        isSearched &&
        <Typography variant="h5" gutterBottom>
          Quote Results
        </Typography>
      }
      <Grid container spacing={2} columns={12}>
        {state.quotes.map((q: QuoteResponse) => {
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
    </ResultsWrapper>
  );
}

export default QuoteResults;
