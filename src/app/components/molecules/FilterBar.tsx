import { FunctionalComponent, FunctionComponent, h, JSX } from 'preact';
import register from 'preact-custom-element';

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ['x-filter-bar']: FilterBarProps
    }
  }
}

export interface FilterBarProps {
  title: string
  open: boolean
  onClick: (e) => void
}

export const FilterBar: FunctionComponent<{
  title: string
  open: string
  onClick
}> = ({ title, open, children, onClick }): JSX.Element => {
  return (
    <div className={`filter-bar ${open ? 'open' : ''}`} onClick={onClick}>
      <span className='icon'>
        <svg
          width='15px'
          height='15px'
          viewBox='0 0 24 21'
          xmlns='http://www.w3.org/2000/svg'
        >
          <polyline
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            points='7.086 3.174 17.086 13.174 7.086 23.174'
            transform='scale(1 -1) rotate(-89 -1.32 0)'
          />
        </svg>
      </span>
      <x-title tag='span' text={title} />
    </div>
  );
};
register(FilterBar, 'x-filter-bar', ['title', 'open']);

export type FilterBarType = FunctionalComponent<FilterBarProps>;
