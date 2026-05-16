import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import type { QuoteResponse } from "../types/quote.types";

// ─── Styled Components ───────────────────────────────────────────────────────

const CourierAvatar = styled(Avatar)(() => ({
  width: 48,
  height: 48,
}));

const CourierNameText = styled(Typography)(() => ({
  fontWeight: 700,
})) as typeof Typography;

const EtaText = styled(Typography)(() => ({
  fontWeight: 500,
})) as typeof Typography;

const PriceValueText = styled(Typography)(() => ({
  fontWeight: 500,
})) as typeof Typography;

const TotalLabelText = styled(Typography)(() => ({
  fontWeight: 600,
})) as typeof Typography;

const TotalValueText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isCheapest",
})<{ isCheapest?: boolean }>(({ theme, isCheapest }) => ({
  fontWeight: 800,
  color: isCheapest ? theme.palette.success.main : theme.palette.text.primary,
}));

const CardBody = styled(CardContent)(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  paddingTop: 0,
}));

const PriceRow = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const PriceStack = styled(Stack)(() => ({
  marginBottom: 16,
  flex: 1,
}));

const CardFooter = styled(Box)(() => ({
  marginTop: "auto",
}));

const TotalRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  borderTop: `1px solid ${theme.palette.divider}`,
  paddingTop: theme.spacing(1.5),
}));

const BadgeChip = styled(Chip)(() => ({
  fontWeight: 600,
}));

// ─── Types ───────────────────────────────────────────────────────────────────

interface CourierCardProps {
  quote: QuoteResponse;
  isCheapest?: boolean;
  isFastest?: boolean;
}

// ─── Component ───────────────────────────────────────────────────────────────

function CourierCard({ quote, isCheapest = false, isFastest = false }: CourierCardProps) {
  return (
    <Card
      sx={(theme) => ({
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: isCheapest
          ? `2px solid ${theme.palette.success.main}`
          : isFastest
          ? `2px solid ${theme.palette.primary.main}`
          : "2px solid transparent",
      })}
    >
      <CardHeader
        avatar={
          <CourierAvatar src={quote.logo} alt={quote.name}>
            {quote.name?.charAt(0)}
          </CourierAvatar>
        }
        title={<CourierNameText variant="h6">{quote.name}</CourierNameText>}
        subheader={
          <EtaText variant="body2" color="text.secondary">
            Estimated Delivery: {quote.eta} day(s)
          </EtaText>
        }
      />

      <CardBody>
        <PriceStack spacing={1.5}>
          <PriceRow>
            <Typography variant="body2" color="text.secondary">Base Price</Typography>
            <PriceValueText variant="body2">${quote.basePrice.toFixed(2)}</PriceValueText>
          </PriceRow>

          <PriceRow>
            <Typography variant="body2" color="text.secondary">Tax & Fees</Typography>
            <PriceValueText variant="body2">${quote.tax.toFixed(2)}</PriceValueText>
          </PriceRow>
        </PriceStack>

        <CardFooter>
          <TotalRow>
            <TotalLabelText variant="subtitle1">Total</TotalLabelText>
            <TotalValueText variant="h5" isCheapest={isCheapest}>
              ${quote.total.toFixed(2)}
            </TotalValueText>
          </TotalRow>

          {(isCheapest || isFastest) && (
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              {isCheapest && <BadgeChip label="Best Value" color="success" size="small" />}
              {isFastest && <BadgeChip label="Lightning Fast" color="primary" size="small" />}
            </Stack>
          )}
        </CardFooter>
      </CardBody>
    </Card>
  );
}

export default CourierCard;
