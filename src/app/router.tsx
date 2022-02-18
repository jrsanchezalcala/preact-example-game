import {h, JSX} from 'preact';
import {GameProps} from './components/pages/Game';
import {NotFound} from './NotFound';


type TRoute = {
	content: () => JSX.Element
};

const routes: Record<string, TRoute> = {
	'': {
		content: () => <x-game/>
	}
};


export function router(location: Location): JSX.Element {
	const path = location.pathname.replace(/\/$/, '');

	const route: { content: () => JSX.Element } = routes[path];

	return route ? route.content() : <NotFound/>;
}
