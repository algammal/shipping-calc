import LocationPinIcon from '@mui/icons-material/LocationPin';
import FlagIcon from '@mui/icons-material/Flag';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Stack, Paper, Typography } from '@mui/material';
import { useQuote } from "../../hooks/useQuote";
import { HighlightBox } from "./SidebarSummary.styles";

function SidebarSummary() {
    const { state } = useQuote();
    return (
        <>
            <img src="/fincartLogo.avif" alt="logo" width={180} />
            <Stack className="fullHeightCenterColumn">
                <Typography variant="h2" className="sectionTitle">
                    Shipment Summary
                </Typography>
                {state.originCountry.length > 0 && <div>
                    <Stack className="row">
                        <Paper className="iconCircle iconPrimary" elevation={0}>
                            <LocationPinIcon />
                        </Paper>
                        <Typography>Origin Details:</Typography>
                    </Stack>
                    <HighlightBox>
                        <Typography>{state.originCountry}</Typography>
                    </HighlightBox>
                </div>
                }
                {
                    state.destinationCountry.length > 0 && <div>
                        <Stack className="row">
                            <Paper className="iconCircle iconWarning" elevation={0}>
                                <FlagIcon />
                            </Paper>
                            <Typography>Destination Details:</Typography>
                        </Stack>
                        <HighlightBox>
                            <Typography>{state.destinationCountry}</Typography>
                        </HighlightBox>
                    </div>
                }
                {
                    Number(state.weight) > 0 && Number(state.volume) > 0 &&
                    <div>
                        <Stack className="row">
                            <Paper className="iconCircle iconSecondary" elevation={0}>
                                <InventoryIcon />
                            </Paper>
                            <Typography>Package Dimensions</Typography>
                        </Stack>

                        <Stack className="dimensionsRow dimensionBox">
                            <div>
                                <Typography>Weight</Typography>
                                <Typography className="valueText">{state.weight}kg</Typography>
                            </div>
                            <div>
                                <Typography>Volume</Typography>
                                <Typography className="valueText">{state.volume}cm³</Typography>
                            </div>
                        </Stack>

                    </div>
                }

            </Stack>
        </>
    );
}
export default SidebarSummary;
