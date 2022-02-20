import { h, JSX } from 'preact';
import { NotFound } from './NotFound';
import './componentsImports';

type TRoute = {
  content: () => JSX.Element
};

const routes: Record<string, TRoute> = {
  '': {
    content: () => <x-game />
  }
};

export function router(location: Location): JSX.Element {
  const path = location.pathname.replace(/\/$/, '');

  const route: { content: () => JSX.Element } = routes[path];

  return route ? route.content() : <NotFound />;
}
