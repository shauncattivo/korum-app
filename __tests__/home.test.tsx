import { render, screen } from '@testing-library/react-native';

import HomeScreen from '@/app/index';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

describe('HomeScreen', () => {
  it('shows the Korum welcome and the Supabase status', async () => {
    await render(<HomeScreen />);
    expect(await screen.findByText('Korum')).toBeTruthy();
    expect(screen.getByText('Grow closer to the people who matter.')).toBeTruthy();
    expect(screen.getByText(/Supabase not connected yet/)).toBeTruthy();
  });
});
