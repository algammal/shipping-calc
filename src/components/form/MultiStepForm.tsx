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
import PackageStep from './steps/PackageStep';

const steps = [
  {
    label: 'Select Origin',
    color:'#1976d2',
  },
  {
    label: 'Select Destination',
    color:'#f8b300',
  },
  {
    label: 'Package Dimensions',
    color:'#18cf99',
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
              {index === 2 ? <PackageStep /> : <OriginStep />}
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
