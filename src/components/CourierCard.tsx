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
      sx={(theme) => ({
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: '16px',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        border: isCheapest ? `2px solid ${theme.palette.success.main}` : isFastest ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
        }
      })}
    >
      <CardHeader
        avatar={
          <Avatar src={quote.logo} alt={quote.name} sx={{ width: 48, height: 48, bgcolor: 'primary.main' }}>
            {quote.name?.charAt(0)}
          </Avatar>
        }
        title={<Typography variant="h6" fontWeight={700}>{quote.name}</Typography>}
        subheader={
          <Typography variant="body2" color="text.secondary" fontWeight={500}>
            Estimated Delivery: {quote.eta} day(s)
          </Typography>
        }
      />

      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', pt: 0 }}>
        <Stack spacing={1.5} sx={{ mb: 2, flex: 1 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" color="text.secondary">
              Base Price
            </Typography>
            <Typography variant="body2" fontWeight={500}>
              ${quote.basePrice.toFixed(2)}
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" color="text.secondary">
              Tax & Fees
            </Typography>
            <Typography variant="body2" fontWeight={500}>
              ${quote.tax.toFixed(2)}
            </Typography>
          </Box>
        </Stack>

        <Box sx={{ mt: 'auto' }}>
          <Box display="flex" justifyContent="space-between" alignItems="baseline" sx={{ borderTop: '1px solid', borderColor: 'divider', pt: 1.5 }}>
            <Typography variant="subtitle1" fontWeight={600}>Total</Typography>
            <Typography variant="h5" fontWeight={800} color={isCheapest ? "success.main" : "text.primary"}>
              ${quote.total.toFixed(2)}
            </Typography>
          </Box>

          {(isCheapest || isFastest) && (
            <Stack direction="row" spacing={1} mt={2}>
              {isCheapest && (
                <Chip label="Best Value" color="success" size="small" sx={{ fontWeight: 600 }} />
              )}
              {isFastest && (
                <Chip label="Lightning Fast" color="primary" size="small" sx={{ fontWeight: 600 }} />
              )}
            </Stack>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

export default CourierCard;