import {FunctionComponent, h, JSX} from 'preact';
import register from 'preact-custom-element';
interface Props {
	src: string
}

export const Image: FunctionComponent<Props> = ({src}): JSX.Element => {
	
	return <image src={src}></image> ;
};
register(Image, 'x-image',['src']);
