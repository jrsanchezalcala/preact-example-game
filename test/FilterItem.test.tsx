import { h } from 'preact';
import { render, fireEvent, screen } from '@testing-library/preact';
import '../src/app/componentsImports';

describe('FilterItem', () => {
  test('should display text and handle click', () => {
    const handleClick = jest.fn();
    const onClick = () => {};
    const { container } = render(
      <x-filter-item text='hola' value='holavalue' mark onClick={onClick} />
    );
    container.addEventListener('click', handleClick);
    fireEvent.click(container);
    expect(container.textContent).toMatch('hola');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test('should be distinct aspect on different open values', () => {
    const onClick = () => {};
    const prop1 = render(
      <x-filter-item text='hola' value='holavalue' mark onClick={onClick} />
    );
    const prop2 = render(
      <x-filter-item
        text='hola'
        value='holavalue'
        mark={false}
        onClick={onClick}
      />
    );
    expect(prop1.container.innerHTML !== prop2.container.innerHTML).toBe(true);
  });
});
