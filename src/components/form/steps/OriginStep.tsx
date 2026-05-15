import { Autocomplete, TextField } from '@mui/material';
import { Stack } from '@mui/material';
import { Controller } from 'react-hook-form';
import { useEffect, useState, useRef } from 'react';
import { getFieldValidation } from '../validationHelpers';
import { useCountries } from "../../../hooks/useCountries";

function OriginStep({ control }: { control: any }) {
  const [touched, setTouched] = useState(false);
  const touchedRef = useRef(false);
  const { countries } = useCountries();
  useEffect(() => {
    touchedRef.current = touched;
  }, [touched]);

  const handleFieldBlur = () => {
    setTouched(true);
  };

  return (
    <Stack className="dimensionsRow">
      <Controller
        name="originCountry"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const validation = getFieldValidation('originCountry', field.value);
          return (
            <Autocomplete
              disablePortal
              options={countries}
              sx={{ width: '200px' }}
              value={countries.find((option) => option.value === field.value) ?? null}
              onChange={(_, value) => field.onChange(value?.value ?? '')}
              onBlur={handleFieldBlur}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Country"
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

export default OriginStep;