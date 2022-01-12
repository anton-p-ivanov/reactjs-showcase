import React from 'react';

import { render } from '@testing-library/react';

import AuthView from 'views/AuthView';

// test('loads and displays login screen', () => {
//   render(<div id="test" />);
//   expect(screen.getByRole('div')).toHaveProperty('id', 'test');
// });

describe('AuthView', () => {
  it('Is rendering', () => {
    const { getByRole } = render(<AuthView />);

    expect(getByRole('button')).toBeDefined();
    // expect(1 + 2).toBe(3);
  });
});
