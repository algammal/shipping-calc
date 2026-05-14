export interface ValidationResult {
  hasError: boolean;
  message: string;
}

export function getFieldValidation(
  fieldType: 'weight' | 'volume' | 'originCountry' | 'destinationCountry',
  value: any
): ValidationResult {
  switch (fieldType) {
    case 'weight':
      if (!value || value == 0) {
        return { hasError: true, message: 'Weight is required' };
      }
      if (value <= 0) {
        return { hasError: true, message: 'Weight must be a positive number' };
      }
      return { hasError: false, message: '' };

    case 'volume':
      if (!value || value == 0) {
        return { hasError: true, message: 'Volume is required' };
      }
      if (value <= 0) {
        return { hasError: true, message: 'Volume must be a positive number' };
      }
      return { hasError: false, message: '' };

    case 'originCountry':
      if (!value || value.trim() === '') {
        return { hasError: true, message: 'Origin country is required' };
      }
      return { hasError: false, message: '' };

    case 'destinationCountry':
      if (!value || value.trim() === '') {
        return { hasError: true, message: 'Destination country is required' };
      }
      return { hasError: false, message: '' };

    default:
      return { hasError: false, message: '' };
  }
}
