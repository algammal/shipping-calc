import { Autocomplete, TextField, Alert, Button, Snackbar } from '@mui/material';
import { Stack } from '@mui/material';
import { Controller } from 'react-hook-form';
import { useEffect, useState, useRef } from 'react';
import { useCountries } from "../../../hooks/useCountries";

function OriginStep({ control }: { control: any }) {
  const [touched, setTouched] = useState(false);
  const touchedRef = useRef(false);
  const { countries, error, retry } = useCountries();
  useEffect(() => {
    touchedRef.current = touched;
  }, [touched]);

  const handleFieldBlur = () => {
    setTouched(true);
  };

  return (
    <Stack className="dimensionsRow" spacing={2}>
      <Snackbar 
        open={!!error} 
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          severity="error"
          action={
            <Button color="inherit" size="small" onClick={retry}>
              RETRY
            </Button>
          }
        >
          {error}
        </Alert>
      </Snackbar>
      <Controller
        name="originCountry"
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => {
          return (
            <Autocomplete
              disablePortal
              options={countries}
              sx={{ width: '200px' }}
              value={countries.find((option) => option.label === field.value) ?? null}
              onChange={(_, value) => field.onChange(value?.label ?? '')}
              onBlur={handleFieldBlur}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Country"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          );
        }}
      />
    </Stack>
  );
}

export default OriginStep;