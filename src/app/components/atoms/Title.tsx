import {FunctionComponent,h, JSX} from 'preact';
import register from 'preact-custom-element';

export interface TitleProps{

}

export const Title: FunctionComponent = ({ children }): JSX.Element => {

	return <h1 class='title'>{children}</h1>;
};
register(Title, 'x-title');
