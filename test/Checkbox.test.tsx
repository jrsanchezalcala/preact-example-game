import { h } from 'preact';
import { render, fireEvent, screen } from '@testing-library/preact';

import '../src/app/componentsImports';

describe('Checkbox', () => {
  test('should display checkbox', () => {
    const handleClick = jest.fn();

    const { container } = render(
      <x-checkbox mark={false} value='name' onClick={handleClick} />
    );
    container.addEventListener('click', handleClick);
    fireEvent.click(container);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
