import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";

export const CourierAvatar = styled(Avatar)(({ theme }) => ({
  width: 48,
  height: 48,
  backgroundColor: theme.palette.grey[50],
  border: `1px solid ${theme.palette.divider}`,
  "& img": {
    objectFit: "contain",
    width: "100%",
    height: "100%",
  },
}));

export const CourierNameText = styled(Typography)(() => ({
  fontWeight: 700,
})) as typeof Typography;

export const EtaText = styled(Typography)(() => ({
  fontWeight: 500,
})) as typeof Typography;

export const PriceValueText = styled(Typography)(() => ({
  fontWeight: 500,
})) as typeof Typography;

export const TotalLabelText = styled(Typography)(() => ({
  fontWeight: 600,
})) as typeof Typography;

export const TotalValueText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isCheapest",
})<{ isCheapest?: boolean }>(({ theme, isCheapest }) => ({
  fontWeight: 800,
  color: isCheapest ? theme.palette.success.main : theme.palette.text.primary,
}));

export const CardBody = styled(CardContent)(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  paddingTop: 0,
}));

export const PriceRow = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const PriceStack = styled(Stack)(() => ({
  marginBottom: 16,
  flex: 1,
}));

export const CardFooter = styled(Box)(() => ({
  marginTop: "auto",
}));

export const TotalRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  borderTop: `1px solid ${theme.palette.divider}`,
  paddingTop: theme.spacing(1.5),
}));

export const BadgeChip = styled(Chip)(() => ({
  fontWeight: 600,
}));
