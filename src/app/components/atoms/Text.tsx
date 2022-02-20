import {FunctionComponent,h, JSX} from 'preact';
import register from 'preact-custom-element';
export interface TextProps {
	text: string
}

export const Text: FunctionComponent<TextProps> = ({text}): JSX.Element => {

return <span class="text" >{text}</span>;
};
register(Text, 'x-text',['text']);
