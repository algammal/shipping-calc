import { useState, useEffect } from 'react';
import MultiStepForm from '../components/form/MultiStepForm';
import SidebarSummary from '../components/SidebarSummary';
import QuoteResults from '../components/QuoteResults';
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema } from "../schema/schema";
import type { QuoteFormData } from "../schema/schema";
import { useQuote } from "../hooks/useQuote";
import {
  AppContainer,
  SidebarWrapper,
  MainContentWrapper,
  QuoteResultsWrapper,
} from "./App.styles";

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