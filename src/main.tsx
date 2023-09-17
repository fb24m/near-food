import ReactDOM from 'react-dom/client';
import './index.scss';
import 'swiper/css';

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from './query';

import { FluentProvider } from "@fluentui/react-components";
import { darkTheme } from './theme';

import { Menu } from './components/Menu';

import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { Categories } from './pages/Categories';
// import { GoodCard } from './pages/GoodCard';
import { Cart } from './pages/Cart';
import { OrderDelivery } from './pages/OrderDelivery';
import { Payment } from './pages/Payment';
import { Bonuses } from './pages/Bonuses';

import { HashRouter, Route, Routes } from 'react-router-dom';

const root: ReactDOM.Root = ReactDOM.createRoot(document.querySelector('#root')!);

root.render(
	<FluentProvider theme={darkTheme}>
		<QueryClientProvider client={queryClient}>
			<HashRouter>
				<Menu />
				<Routes>
					<Route path='catalog' Component={Catalog} />
					<Route path='offers' Component={Bonuses} />
					<Route path='categories' Component={Categories} />
					<Route path='cart' Component={Cart} />
					<Route path='order-delivery' Component={OrderDelivery} />
					<Route path='payment' Component={Payment} />
					<Route path='/' Component={Home} />
				</Routes>
			</HashRouter>
		</QueryClientProvider>
	</FluentProvider>
)
