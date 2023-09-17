import styles from './index.module.scss';
import React from 'react';

import { useRequest } from '../../hooks/useRequest';

import { QueryTypes } from '../../enums/queryTypes.enum';

import { Body2, Button, Spinner, Title1 } from '@fluentui/react-components';

import { CartGood } from './CartGood';
import { ICartGood } from '../../interfaces/ICart.interface';

export const Cart = (): React.ReactElement => {
	const { isSuccess, isLoading, data } = useRequest(QueryTypes.cart);

	if (isLoading) return <Spinner />

	if (isSuccess) {
		return (
			<div className={styles.cart}>
				<div className="container">
					<Title1>Корзина</Title1>
					<div className={styles.goods}>
						{data.list.map((good: ICartGood, index: number) =>
							<CartGood
								index={index}
								key={index}
								image={good.image}
								title={good.name}
								description={good.description}
								count={good.count}
								price={good.price} />)}
					</div>
					<div className={styles.order}>
						<div className="buttons">
							<Button as='a' href='/#/order-delivery' appearance='primary'>Доставка</Button>
							<Button as='a' href='?page=order-cafe'>В предприятии</Button>
						</div>
						<Body2 className={styles.text}>Итоговая стоимасть будет рассчитана автоматически</Body2>
					</div>
				</div>
			</div>
		);
	}
	else return <>Error</>;
}