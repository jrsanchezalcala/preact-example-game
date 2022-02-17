import {h, JSX} from 'preact';
import {Home} from './components/pages/Home';
import {NotFound} from './NotFound';


type TRoute = {
	content: () => JSX.Element
};

const routes: Record<string, TRoute> = {
	'': {
		content: () => <Home/>
	}
};


export function router(location: Location): JSX.Element {
	const path = location.pathname.replace(/\/$/, '');

	const route: { content: () => JSX.Element } = routes[path];

	return route ? route.content() : <NotFound/>;
}
