import { h } from 'preact';
import { render, fireEvent, screen } from '@testing-library/preact';

import '../src/app/componentsImports';

describe('Filter', () => {
  test('should display filter and fire event change', () => {
    const handleChange = jest.fn();

    const { container } = render(
      <x-filter title='hola' onChange={handleChange} items={[]} />
    );
    container.addEventListener('change', handleChange);
    expect(container.textContent).toMatch('hola');
    fireEvent.change(container);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
