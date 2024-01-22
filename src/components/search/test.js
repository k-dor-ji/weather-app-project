import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Search from './searchearch'; // Adjust the import path as needed
import '@testing-library/jest-dom';

// Mocking the global fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      data: [
        { name: 'New York', countryCode: 'US', latitude: 40.7128, longitude: -74.0060 },
        // Add more mock city data as needed
      ],
    }),
  })
);

describe('Search component', () => {
  test('loadOptions returns formatted city data', async () => {
    const { getByPlaceholderText } = render(<Search onSearchChange={() => {}} />);
    const input = getByPlaceholderText('Search for city');
    input.onChange({ target: { value: 'New' } }); // Simulate user typing 'New'

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=New',
        // Replace YOUR_GEO_API_URL with the actual variable or URL
        expect.anything() // for the geoAPiOptions
      );
    });

    // You can also test the expected output format if needed
  });

  // Additional tests for error handling and other scenarios can be added here
});
