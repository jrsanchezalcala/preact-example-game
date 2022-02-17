import { h } from 'preact';
import { render, fireEvent, screen } from '@testing-library/preact';

import {Image} from '../src/app/components/atoms/Image';
describe('Image', () => {
	test('should display image tag', () => {
	  const { container } = render(<Image src={"hola.jpg"}/>);
	  let img = container.getElementsByTagName("img")[0] ;
	  expect(img).toBeDefined();
	  expect(img.getAttribute("src")).toBe("hola.jpg");

	});
  });

