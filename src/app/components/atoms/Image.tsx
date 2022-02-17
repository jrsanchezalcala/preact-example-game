import {FunctionComponent,h, JSX} from 'preact';
import register from 'preact-custom-element';
interface Props {
	src: string
}

export const Image: FunctionComponent<Props> = ({src}): JSX.Element => {

	return <img src={src} />;
};
register(Image, 'x-image',['src']);
