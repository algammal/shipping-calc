import { Autocomplete, TextField } from '@mui/material';
import { Stack } from '@mui/material';
import { Controller } from 'react-hook-form';
import { getFieldValidation } from '../validationHelpers';

const countryOptions = [
  { label: 'The Shawshank Redemption' },
  { label: 'The Godfather' },
  { label: 'The Godfather: Part II' },
  { label: 'The Dark Knight' },
];

function DestinationStep({ control }: { control: any }) {
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
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Destination"
                  error={validation.hasError}
                  helperText={validation.message}
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
