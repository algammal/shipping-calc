
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';

type CourierQuote = {
  id: string;
  name: string;
  logo?: string;
  basePrice: number;
  tax: number;
  total: number;
  eta: number;
};

function CourierCard({ quote }: { quote: CourierQuote }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar src={quote.logo} sx={{ bgcolor: red[500] }} aria-label={quote.name}>
            {quote.name?.charAt(0) ?? 'C'}
          </Avatar>
        }
        title={quote.name}
        subheader={`ETA: ${quote.eta} day(s)`}
      />
      <CardContent>
        <Stack spacing={1}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2" color="text.secondary">
              Base
            </Typography>
            <Typography variant="body2">${quote.basePrice.toFixed(2)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2" color="text.secondary">
              Tax
            </Typography>
            <Typography variant="body2">${quote.tax.toFixed(2)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="subtitle1">Total</Typography>
            <Typography variant="subtitle1">${quote.total.toFixed(2)}</Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default CourierCard;