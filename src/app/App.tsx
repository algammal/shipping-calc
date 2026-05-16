import { useState, useEffect } from 'react';
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import MultiStepForm from '../components/form/MultiStepForm';
import SidebarSummary from '../components/SidebarSummary';
import QuoteResults from '../components/QuoteResults';
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema } from "../schema/schema";
import type { QuoteFormData } from "../schema/schema";
import { useQuote } from "../hooks/useQuote";

// ─── Styled Layout Components ────────────────────────────────────────────────

const AppContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

const SidebarWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  width: '100%',
  [theme.breakpoints.up('md')]: {
    padding: '4rem',
    width: '360px',
    flexShrink: 0,
  },
}));

const MainContentWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
  background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.common.white})`,
  [theme.breakpoints.up('md')]: {
    padding: '4rem',
  },
}));

const QuoteResultsWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

// ─── Form Observer ───────────────────────────────────────────────────────────

function FormObserver() {
  const { dispatch } = useQuote();
  const values = useWatch();

  useEffect(() => {
    dispatch({ type: "SET_STEP_DATA", payload: values });
  }, [values, dispatch]);

  return null;
}

// ─── App ─────────────────────────────────────────────────────────────────────

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

  const onSubmit = (_data: QuoteFormData) => {
    // handled inside MultiStepForm
  };

  return (
    <AppContainer>
      <SidebarWrapper>
        <SidebarSummary />
      </SidebarWrapper>

      <MainContentWrapper>
        <FormProvider {...methods}>
          <FormObserver />
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <MultiStepForm
              methods={methods}
              isSearchedHandler={setIsSearched}
              isSearched={isSearched}
            />
          </form>
        </FormProvider>

        <QuoteResultsWrapper>
          <QuoteResults isSearched={isSearched} />
        </QuoteResultsWrapper>
      </MainContentWrapper>
    </AppContainer>
  );
}

export default App;