import { useQuote } from "../hooks/useQuote";
import CourierCard from "./CourierCard";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function QuoteResults() {
    const { state } = useQuote();

    if (!state.quotes || state.quotes.length === 0) {
        return (
            <div>
                <h2>Quote Results</h2>
                <p>No quotes available for the selected shipment.</p>
            </div>
        );
    }

    return (
        <div>
            <Typography variant="h5" gutterBottom>Quote Results</Typography>
            <Grid container spacing={2}>
                {state.quotes.map((q: any) => (
                    <Grid item key={q.id} xs={12} sm={6} md={4}>
                        <CourierCard quote={q} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default QuoteResults;