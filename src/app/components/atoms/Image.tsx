import {FunctionComponent,h, JSX} from 'preact';
import register from 'preact-custom-element';
export interface ImageProps {
	src: string
}

export const Image: FunctionComponent<ImageProps> = ({src}): JSX.Element => {

	return <img src={src} />;
};
register(Image, 'x-image',['src']);
