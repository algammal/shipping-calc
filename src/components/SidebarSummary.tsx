import LocationPinIcon from '@mui/icons-material/LocationPin';
import FlagIcon from '@mui/icons-material/Flag';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Stack, Paper, Typography } from '@mui/material';

function SidebarSummary() {
    return (
        <>
            <img src="/fincartLogo.avif" alt="logo" width={180} />
            <Stack className="fullHeightCenterColumn">
                <Typography variant="h2" className="sectionTitle">
                    Shipment Summary
                </Typography>

                <Stack className="row">
                    <Paper className="iconCircle iconPrimary" elevation={0}>
                        <LocationPinIcon />
                    </Paper>
                    <Typography>Origin Details:</Typography>

                </Stack>
                <Stack sx={{
                    display: "flex",
                    alignItems: "baseline",
                    flexFlow: "column",
                    mb:3,
                    padding: '5px 10px',
                    borderRadius: '20px',
                    backgroundColor: '#f5f8ff',
                }}>
                    <Typography>Egypt, CA</Typography>
                </Stack>

                <Stack className="row">
                    <Paper className="iconCircle iconWarning" elevation={0}>
                        <FlagIcon />
                    </Paper>
                    <Typography>Destination Details:</Typography>
                </Stack>
                <Stack sx={{
                    display: "flex",
                    alignItems: "baseline",
                    flexFlow: "column",
                    mb:3,
                    padding: '5px 10px',
                    borderRadius: '20px',
                    backgroundColor: '#f5f8ff',
                }}>
                    <Typography>Egypt, CA</Typography>
                </Stack>

                <Stack className="row">
                    <Paper className="iconCircle iconSecondary" elevation={0}>
                        <InventoryIcon />
                    </Paper>
                    <Typography>Package Dimensions</Typography>
                </Stack>

                <Stack className="dimensionsRow dimensionBox">
                    <div>
                        <Typography>Weight</Typography>
                        <Typography className="valueText">20kg</Typography>
                    </div>
                    <div>
                        <Typography>Volume</Typography>
                        <Typography className="valueText">1000cm³</Typography>
                    </div>
                </Stack>
            </Stack>
        </>
    );
}
export default SidebarSummary;