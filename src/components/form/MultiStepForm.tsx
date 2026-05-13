import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import OriginStep from './steps/OriginStep';

const steps = [
  {
    label: 'Select Origin',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Select Destination',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Package Dimensions',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

function MultiStepForm({ isSearchedHandler, isSearched }: { isSearchedHandler: (value: boolean) => void, isSearched: boolean }) {
  const [activeStep, setActiveStep] = React.useState(0);


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    isSearchedHandler(false);
  };

  const handelSubmit = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    isSearchedHandler(true);

  }
  return (
    <Box sx={{ maxWidth: 400 }}>
        {!isSearched &&
        <div>
        <h1>Shipment info</h1>
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
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <OriginStep />
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={index === steps.length - 1 ?handelSubmit:handleNext}
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
      {activeStep === steps.length &&  isSearched &&(
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
