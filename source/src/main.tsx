import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.scss';

import { FluentProvider } from "@fluentui/react-components";
import { darkTheme } from './theme';

import { Menu } from './blocks/Menu';
import { Catalog } from './blocks/Catalog';

const root: ReactDOM.Root = ReactDOM.createRoot(document.querySelector('#root')!);

const router = createBrowserRouter([
	{
		path: "/catalog",
		element: <Catalog />
	},
	{
		path: '/*',
		element: <div className="container">404 not found</div>
	}
])

root.render(
	<FluentProvider theme={darkTheme}>
		<Menu />
		<RouterProvider router={router} />
	</FluentProvider>
)
