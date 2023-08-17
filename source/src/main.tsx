import ReactDOM from 'react-dom/client';
import './index.scss';

import { FluentProvider } from "@fluentui/react-components";
import { darkTheme } from './theme';

import { Menu } from './blocks/Menu';
import { Catalog } from './blocks/Catalog';

const root: ReactDOM.Root = ReactDOM.createRoot(document.querySelector('#root')!);

root.render(
	<FluentProvider theme={darkTheme}>
		<Menu />
		<Catalog />
	</FluentProvider>
)
