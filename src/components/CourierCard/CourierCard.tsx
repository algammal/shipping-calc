import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {
  CourierAvatar,
  CourierNameText,
  EtaText,
  PriceValueText,
  TotalLabelText,
  TotalValueText,
  CardBody,
  PriceRow,
  PriceStack,
  CardFooter,
  TotalRow,
  BadgeChip,
} from "./CourierCard.styles";
import type { QuoteResponse } from "../../types/quote.types";

interface CourierCardProps {
  quote: QuoteResponse;
  isCheapest?: boolean;
  isFastest?: boolean;
}

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
