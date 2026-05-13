import LocationPinIcon from '@mui/icons-material/LocationPin';
import FlagIcon from '@mui/icons-material/Flag';
import { Box } from '@mui/material';

function SidebarSummary() {
    return (
        <div>
            <img alt="logo" src="/fincartLogo.avif" style={{ width: '150px', marginBottom: '20px' }} />
            <h2>Shipment Summary</h2>
            <ul>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{
                        backgroundColor: '#0065fa',
                        width: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '40px',
                        borderRadius: '100%',
                        marginRight: '10px'
                    }}>
                        <LocationPinIcon style={{ color: '#fff' }} />
                    </span>
                    Origin Details: Egypt, CA
                </li>

                <li style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{
                        backgroundColor: '#f8b300',
                        width: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '40px',
                        borderRadius: '100%',
                        marginRight: '10px'
                    }}>
                        <FlagIcon style={{ color: '#fff' }} />
                    </span>
                    Destination Details: Saudi Arabia, SA
                </li>

                
                    </ul>
                    <Box sx={{ mt: 2 }}>
                        <div style={{ marginTop: '15px', listStyleType: 'none' }}>
                    <div><h2>Package Dimensions:</h2></div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ marginRight: '20px' }}>
                            Weight: <span style={{ fontSize: '1.5rem',fontWeight: 'bold' }}>20kg</span>
                        </div>
                        <div>Volume: <span style={{ fontSize: '1.5rem',fontWeight: 'bold' }}>1000cm³</span>
                        </div>
                    </div>
                </div>
                    </Box>
                </div>
                );
}

                export default SidebarSummary;
