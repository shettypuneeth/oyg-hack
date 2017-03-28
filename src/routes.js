import Async from './components/Async/Async';

export const Demo = Async(() => import('./components/Demo/Demo.jsx').then((module) => module.default));