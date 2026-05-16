import { TextField, InputAdornment } from '@mui/material';
import { Stack } from '@mui/material';
import { Controller } from 'react-hook-form';
import { useEffect, useState, useRef } from 'react';

function PackageStep({ control }: { control: any }) {
  const [touchedFields, setTouchedFields] = useState<{ weight: boolean; volume: boolean }>({
    weight: false,
    volume: false,
  });
  const touchedRef = useRef<{ weight: boolean; volume: boolean }>({
    weight: false,
    volume: false,
  });

  useEffect(() => {
    touchedRef.current = touchedFields;
  }, [touchedFields]);

  const handleFieldBlur = (fieldName: 'weight' | 'volume') => {
    setTouchedFields((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
  };

  return (
    <Stack className="dimensionsRow">
      <Controller
        name="weight"
        control={control}
        defaultValue={0}
        render={({ field, fieldState }) => {
          return (
            <TextField
              {...field}
              label="Weight"
              type="number"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              onBlur={() => {
                handleFieldBlur('weight');
                field.onBlur();
              }}
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
        render={({ field, fieldState }) => {
          return (
            <TextField
              {...field}
              label="Volume"
              type="number"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              onBlur={() => {
                handleFieldBlur('volume');
                field.onBlur();
              }}
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