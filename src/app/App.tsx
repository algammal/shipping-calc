import {useState} from 'react';
import { Box } from '@mui/material';
import{ theme } from '../theme/theme';
import MultiStepForm from '../components/form/MultiStepForm';
import SidebarSummary from '../components/SidebarSummary';
import CourierCard from '../components/CourierCard';
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema } from "../schema/schema";
import type { QuoteFormData } from "../schema/schema";



function App() {
    const [isSearched, setIsSearched] = useState(false);
    const methods = useForm<QuoteFormData>({
  resolver: zodResolver(quoteSchema),
  mode: "onChange",
  defaultValues: {
    originCountry: '',
    destinationCountry: '',
    weight: 0,
    volume: 0,
  },
});
const onSubmit = (data: QuoteFormData) => {
  console.log("test")
}
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
      <FormProvider {...methods}>
  <form onSubmit={methods.handleSubmit(onSubmit)}>
      <MultiStepForm methods={methods} isSearchedHandler = {setIsSearched} isSearched={isSearched} />
      </form>
      </FormProvider>
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