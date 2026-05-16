import { Autocomplete } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CountryAutocomplete = styled(Autocomplete)(() => ({
  width: 200,
})) as typeof Autocomplete;
