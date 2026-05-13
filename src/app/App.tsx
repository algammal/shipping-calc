import {useState} from 'react';
import { Box } from '@mui/material';
import{ theme } from '../theme/theme';
import MultiStepForm from '../components/form/MultiStepForm';
import SidebarSummary from '../components/SidebarSummary';
import CourierCard from '../components/CourierCard';

function App() {
    const [isSearched, setIsSearched] = useState(false);
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box sx={{ p:'4rem', bgcolor: theme.palette.background.paper }} >
        <SidebarSummary />
        </Box>
      <Box sx={(theme) => ({
    flex: 1,
    background: `linear-gradient(
      to bottom,
      ${theme.palette.background.default},
      ${theme.palette.common.white}
    )`,
    p:'4rem'
  })} >
    <Box >
      <MultiStepForm isSearchedHandler = {setIsSearched} isSearched={isSearched} />
      {isSearched && (
        <Box sx={{ mt: 4 }}>
          <CourierCard/>
        </Box>
      )}
    </Box>
    
    </Box>
    </Box>
  );
}

export default App;