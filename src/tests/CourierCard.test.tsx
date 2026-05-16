import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CourierCard from '../components/CourierCard';

describe('CourierCard', () => {
  const mockQuote = {
    id: '1',
    name: 'FedEx',
    basePrice: 10.0,
    tax: 2.5,
    total: 12.5,
    eta: 3,
  };

  it('renders courier name, eta, base price, tax, and total', () => {
    render(<CourierCard quote={mockQuote} />);
    
    expect(screen.getByText('FedEx')).toBeInTheDocument();
    expect(screen.getByText('Estimated Delivery: 3 day(s)')).toBeInTheDocument();
    expect(screen.getByText('$10.00')).toBeInTheDocument();
    expect(screen.getByText('$2.50')).toBeInTheDocument();
    expect(screen.getByText('$12.50')).toBeInTheDocument();
  });

  it('renders "Best Value" chip when isCheapest is true', () => {
    render(<CourierCard quote={mockQuote} isCheapest={true} />);
    expect(screen.getByText('Best Value')).toBeInTheDocument();
  });

  it('renders "Lightning Fast" chip when isFastest is true', () => {
    render(<CourierCard quote={mockQuote} isFastest={true} />);
    expect(screen.getByText('Lightning Fast')).toBeInTheDocument();
  });

  it('renders both chips when both isCheapest and isFastest are true', () => {
    render(<CourierCard quote={mockQuote} isCheapest={true} isFastest={true} />);
    expect(screen.getByText('Best Value')).toBeInTheDocument();
    expect(screen.getByText('Lightning Fast')).toBeInTheDocument();
  });
});
