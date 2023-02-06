import { render } from 'preact';
import { Index } from '@/app';
import '@styles/global.css';
import '@fontsource/outfit';

render(<Index />, document.getElementById('app') as HTMLElement);
