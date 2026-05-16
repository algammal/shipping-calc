import {useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import OriginStep from './steps/OriginStep';
import DestinationStep from './steps/DestinationStep';
import PackageStep from './steps/PackageStep';
import { useQuote } from "../../hooks/useQuote";
import { useCallQuotes } from "../../hooks/useCallQuotes";
import type { MultiStepFormProps } from "../../types/form.types";
import type { QuoteFormData } from "../../types/quote.types";

const steps = [
  {
    label: 'Select Origin',
    color: '#1976d2',
  },
  {
    label: 'Select Destination',
    color: '#f8b300',
  },
  {
    label: 'Package Dimensions',
    color: '#18cf99',
  },
];


function MultiStepForm({
  methods,
  isSearchedHandler,
  isSearched,
}: MultiStepFormProps) {
  const [activeStep, setActiveStep] = useState(0);
  const { dispatch } = useQuote();
  const { getQuotes } = useCallQuotes();
const handleNext = async () => {
  let fields: (keyof QuoteFormData)[] = [];

  if (activeStep === 0) fields = ["originCountry"];
  if (activeStep === 1) fields = ["destinationCountry"];
  if (activeStep === 2) fields = ["weight", "volume"];

  const isValid = await methods.trigger(fields);

  if (!isValid) return;

  const values = methods.getValues();
  dispatch({
    type: "SET_STEP_DATA",
    payload: values,
  });

  if (activeStep !== 2)setActiveStep((prev) => prev + 1);
};

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    methods.reset();
    dispatch({
    type: "RESET"
  });
    setActiveStep(0);
    isSearchedHandler(false);
  };

  const handelSubmit = async () => {
  const isValid = await methods.trigger(['weight', 'volume']);
  if (!isValid) return;

  const values = methods.getValues();

  dispatch({
    type: 'SET_STEP_DATA',
    payload: values,
  });

  await getQuotes(values);

  setActiveStep((prev) => prev + 1);
  isSearchedHandler(true);
};
  return (
    <Box sx={{ maxWidth: '100%' }}>
      {!isSearched &&
        <div>
          <Typography variant="h1">Shipment info</Typography>
          <p>Please fill in the details for your shipment.following the steps below:</p>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === steps.length - 1 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                  slotProps={{
                    stepIcon: {
                      sx: {
                        // Targets the base icon state, active state, and completed state
                        '&, &.Mui-active, &.Mui-completed': {
                          color: step.color,
                        },
                      },
                    },
                  }}
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  {index === 0 ? (
                    <OriginStep control={methods.control} />
                  ) : index === 1 ? (
                    <DestinationStep control={methods.control} />
                  ) : (
                    <PackageStep control={methods.control} />
                  )}
                  <Box sx={{ mb: 2 }}>
                    <Button
                      variant="contained"
                      onClick={index === steps.length - 1 ? handelSubmit : handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? 'Search Couriers' : 'Continue'}
                    </Button>
                    {index !== 0 && <Button
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>}
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </div>
      }
      {activeStep === steps.length && isSearched && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
export default MultiStepForm;
