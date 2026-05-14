import { Autocomplete, TextField } from '@mui/material';
import { Stack } from '@mui/material';
import { Controller } from 'react-hook-form';
import { useEffect, useState, useRef } from 'react';
import { getFieldValidation } from '../validationHelpers';

const countryOptions = [
  { label: 'The Shawshank Redemption' },
  { label: 'The Godfather' },
  { label: 'The Godfather: Part II' },
  { label: 'The Dark Knight' },
];

function DestinationStep({ control }: { control: any }) {
  const [touched, setTouched] = useState(false);
  const touchedRef = useRef(false);

  useEffect(() => {
    touchedRef.current = touched;
  }, [touched]);

  const handleFieldBlur = () => {
    setTouched(true);
  };

  return (
    <Stack className="dimensionsRow">
      <Controller
        name="destinationCountry"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const validation = getFieldValidation('destinationCountry', field.value);
          return (
            <Autocomplete
              disablePortal
              options={countryOptions}
              sx={{ width: '200px' }}
              value={countryOptions.find((option) => option.label === field.value) ?? null}
              onChange={(_, value) => field.onChange(value?.label ?? '')}
              onBlur={handleFieldBlur}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Destination"
                  error={touched && validation.hasError}
                  helperText={touched ? validation.message : ''}
                />
              )}
            />
          );
        }}
      />
    </Stack>
  );
}

export default DestinationStep;
