import ReactDOM from 'react-dom/client';
import './index.scss';

import { FluentProvider } from "@fluentui/react-components";
import { darkTheme } from './theme';

import { Menu } from './blocks/Menu';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { Categories } from './pages/Categories';
import { GoodCard } from './pages/GoodCard';

import { getQueryVariable } from './functions/getQueryVariable';

const root: ReactDOM.Root = ReactDOM.createRoot(document.querySelector('#root')!);

const page = getQueryVariable('page');

const getPage = (): JSX.Element => {
	if (page == 'categories') return <Categories />
	if (page == 'catalog') return <Catalog />
	if (page == 'good') return <GoodCard />
	else return <Home />
};

root.render(
	<FluentProvider theme={darkTheme}>
		<Menu />
		{getPage()}
	</FluentProvider>
)
