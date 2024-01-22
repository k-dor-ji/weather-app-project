import React from 'react';
import { render, screen } from '@testing-library/react';
import CurrentWeather from './current-weather'; 

describe('CurrentWeather Component', () => {
  test('renders weather data correctly', () => {
    const mockData = {
      city: 'New York',
      weather: [{ description: 'Sunny', icon: '01d' }],
      main: { temp: 23, feels_like: 25, humidity: 50, pressure: 1012 },
      wind: { speed: 5 }
    };

    render(<CurrentWeather data={mockData} />);

    expect(screen.getByText('New York')).toBeInTheDocument();
    expect(screen.getByText('Sunny')).toBeInTheDocument();
    expect(screen.getByText('23°C')).toBeInTheDocument();
    expect(screen.getByAltText('weather')).toHaveAttribute('src', 'icons/01d.png');
    expect(screen.getByText('Feels like')).toBeInTheDocument();
    expect(screen.getByText('25°C')).toBeInTheDocument();
    expect(screen.getByText('Wind')).toBeInTheDocument();
    expect(screen.getByText('5 m/s')).toBeInTheDocument();
    expect(screen.getByText('Humidity')).toBeInTheDocument();
    expect(screen.getByText('50%')).toBeInTheDocument();
    expect(screen.getByText('Pressure')).toBeInTheDocument();
    expect(screen.getByText('1012 hPa')).toBeInTheDocument();
  });
});

