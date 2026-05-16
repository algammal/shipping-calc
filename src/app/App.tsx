import {useState} from 'react';
import { Box } from '@mui/material';
import{ theme } from '../theme/theme';
import MultiStepForm from '../components/form/MultiStepForm';
import SidebarSummary from '../components/SidebarSummary';
import QuoteResults from '../components/QuoteResults';
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema } from "../schema/schema";
import type { QuoteFormData } from "../schema/schema";
import { useEffect } from "react";
import { useQuote } from "../hooks/useQuote";

function FormObserver() {
  const { dispatch } = useQuote();
  const values = useWatch();
  
  useEffect(() => {
    dispatch({ type: "SET_STEP_DATA", payload: values });
  }, [values, dispatch]);

  return null;
}



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
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, minHeight: '100vh' }}>
      <Box sx={{ p: { xs: 2, md: '4rem' }, bgcolor: theme.palette.background.paper, width: { xs: '100%', md: '360px' } }}>
        <SidebarSummary />
      </Box>
      <Box
        sx={(theme) => ({
          flex: 1,
          background: `linear-gradient(
            to bottom,
            ${theme.palette.background.default},
            ${theme.palette.common.white}
          )`,
          p: { xs: 2, md: '4rem' },
        })}
      >
    <Box >
      <FormProvider {...methods}>
        <FormObserver />
  <form onSubmit={methods.handleSubmit(onSubmit)}>
      <MultiStepForm methods={methods} isSearchedHandler = {setIsSearched} isSearched={isSearched} />
      </form>
      </FormProvider>
        <Box sx={{ mt: 4 }}>
          <QuoteResults isSearched={isSearched}/>
        </Box>

    </Box>
    
    </Box>
    </Box>
  );
}

export default App;