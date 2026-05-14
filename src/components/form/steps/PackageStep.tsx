import { TextField, InputAdornment } from '@mui/material';
import { Stack } from '@mui/material';
import { Controller } from 'react-hook-form';

function PackageStep({ control }: { control: any }) {
  return (
    <Stack className="dimensionsRow">
      <Controller
        name="weight"
        control={control}
        defaultValue={0}
        render={({ field }) => (
          <TextField
            {...field}
            label="Weight"
            type="number"
            sx={{ width: '200px' }}
            value={field.value || ''}
            onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : 0)}
            InputProps={{
              startAdornment: <InputAdornment position="start">kg</InputAdornment>,
              inputProps: { min: 0, step: 0.1 },
            }}
          />
        )}
      />
      <Controller
        name="volume"
        control={control}
        defaultValue={0}
        render={({ field }) => (
          <TextField
            {...field}
            label="Volume"
            type="number"
            sx={{ width: '200px' }}
            value={field.value || ''}
            onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : 0)}
            InputProps={{
              startAdornment: <InputAdornment position="start">cm³</InputAdornment>,
              inputProps: { min: 0, step: 1 },
            }}
          />
        )}
      />
    </Stack>
  );
}

export default PackageStep;