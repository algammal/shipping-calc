import { Autocomplete, TextField } from '@mui/material';
import { Stack } from '@mui/material';
import { Controller } from 'react-hook-form';

const countryOptions = [
  { label: 'The Shawshank Redemption' },
  { label: 'The Godfather' },
  { label: 'The Godfather: Part II' },
  { label: 'The Dark Knight' },
];

function OriginStep({ control }: { control: any }) {
  return (
    <Stack className="dimensionsRow">
      <Controller
        name="originCountry"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Autocomplete
            disablePortal
            options={countryOptions}
            sx={{ width: '200px' }}
            value={countryOptions.find((option) => option.label === field.value) ?? null}
            onChange={(_, value) => field.onChange(value?.label ?? '')}
            renderInput={(params) => <TextField {...params} label="Select Country" />}
          />
        )}
      />
    </Stack>
  );
}

export default OriginStep;