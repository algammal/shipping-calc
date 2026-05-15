import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

type CourierQuote = {
  id: string;
  name: string;
  logo?: string;
  basePrice: number;
  tax: number;
  total: number;
  eta: number;
};

function CourierCard({
  quote,
  isCheapest = false,
  isFastest = false,
}: {
  quote: CourierQuote;
  isCheapest?: boolean;
  isFastest?: boolean;
}) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader
        avatar={
          <Avatar src={quote.logo} alt={quote.name}>
            {quote.name?.charAt(0)}
          </Avatar>
        }
        title={quote.name}
        subheader={`ETA: ${quote.eta} day(s)`}
      />

      <CardContent sx={{ flex: 1 }}>
        <Stack spacing={1}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="text.secondary">
              Base
            </Typography>
            <Typography variant="body2">
              ${quote.basePrice.toFixed(2)}
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="text.secondary">
              Tax
            </Typography>
            <Typography variant="body2">
              ${quote.tax.toFixed(2)}
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Total</Typography>
            <Typography variant="subtitle1">
              ${quote.total.toFixed(2)}
            </Typography>
          </Box>
        </Stack>

        {(isCheapest || isFastest) && (
          <Stack direction="row" spacing={1} mt={2}>
            {isCheapest && (
              <Chip label="Cheapest" color="success" size="small" />
            )}
            {isFastest && (
              <Chip label="Fastest" color="primary" size="small" />
            )}
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}

export default CourierCard;