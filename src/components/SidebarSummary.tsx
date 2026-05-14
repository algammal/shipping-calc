import LocationPinIcon from '@mui/icons-material/LocationPin';
import FlagIcon from '@mui/icons-material/Flag';
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
                    mb:3
                }}>
                    <Typography>location: Egypt, CA</Typography>
                    <Typography>Name: test</Typography>
                    <Typography>Phone: 000xxx0000</Typography>
                    <Typography>Location Details: 000xxx0000</Typography>
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
                    mb:3
                }}>
                    <Typography>location: Egypt, CA</Typography>
                    <Typography>Name: test</Typography>
                    <Typography>Phone: 000xxx0000</Typography>
                    <Typography>Location Details: 000xxx0000</Typography>
                </Stack>

                <Typography variant="h2" className="sectionTitle">
                    Package Dimensions
                </Typography>

                <Stack className="dimensionsRow">
                    <div>
                        <Typography>Weight</Typography>
                        <Typography className="valueText">20kg</Typography>
                    </div>
                    <div>
                        <Typography>Volume</Typography>
                        <Typography className="valueText">1000cm³</Typography>
                    </div>
                </Stack>
                <Stack><Typography>Package Description: Test Package</Typography></Stack>
            </Stack>
        </>
    );
}
export default SidebarSummary;