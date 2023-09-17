import styles from './index.module.scss';
import React, { useState } from 'react';

import { Body1Strong, Body1, Card, SpinButton } from '@fluentui/react-components';

interface CartGoodProps {
	image: string
	title: string
	description: string
	count: number
	price: number
	index: number
}

export const CartGood = (props: CartGoodProps): React.ReactElement => {
	const startPrice = props.price;
	const [price, setPrice] = useState<number>(startPrice * props.count);

	return (
		<Card className={styles.wrapper}>
			<img src={props.image} alt="" className={styles.image} />
			<div className={styles.info}>
				<Body1Strong className={styles.title}>{props.title}</Body1Strong>
				<Body1 className={styles.description}>{props.description}</Body1>
			</div>
			<SpinButton min={1} onChange={() => {
				const counter = document.querySelector(`#couner-${props.index}`) as HTMLInputElement;
				console.log(counter.value);

				let count: number = 0;

				if (Number(counter.value) === 2) count = Number(counter.value) - 1;
				else count = Number(counter.value);

				console.log(count);

				setPrice((Number(counter.value) - 1) * startPrice);
			}} className={styles.counter} defaultValue={props.count} id={`couner-${props.index}`} />
			<Body1Strong className={styles.price}>{price}₽</Body1Strong>
		</Card>
	);
};