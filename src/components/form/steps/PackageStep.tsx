import { TextField, InputAdornment } from '@mui/material';
import { Stack } from '@mui/material';
import { Controller } from 'react-hook-form';
import { getFieldValidation } from '../validationHelpers';

function PackageStep({ control }: { control: any }) {
  return (
    <Stack className="dimensionsRow">
      <Controller
        name="weight"
        control={control}
        defaultValue={0}
        render={({ field }) => {
          const validation = getFieldValidation('weight', field.value);
          return (
            <TextField
              {...field}
              label="Weight"
              type="number"
              error={validation.hasError}
              helperText={validation.message}
              sx={{ width: '200px' }}
              value={field.value || ''}
              onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : 0)}
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                },
                htmlInput: {
                  min: 0,
                  step: 0.1,
                },
              }}
            />
          );
        }}
      />
      <Controller
        name="volume"
        control={control}
        defaultValue={0}
        render={({ field }) => {
          const validation = getFieldValidation('volume', field.value);
          return (
            <TextField
              {...field}
              label="Volume"
              type="number"
              error={validation.hasError}
              helperText={validation.message}
              sx={{ width: '200px' }}
              value={field.value || ''}
              onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : 0)}
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">cm³</InputAdornment>,
                },
                htmlInput: {
                  min: 0,
                  step: 0.1,
                },
              }}
            />
          );
        }}
      />
    </Stack>
  );
}

export default PackageStep;