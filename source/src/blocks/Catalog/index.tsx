import styles from "./index.module.scss";

import { useState } from "react";

import { Title3, Subtitle1, Body1, Card, Button, Spinner } from "@fluentui/react-components";
import { CartRegular, VehicleCarProfileLtrRegular } from "@fluentui/react-icons";

interface OfferProps {
	image: string,
	title: string,
	price: number
}

const Good = (props: OfferProps): JSX.Element => (
	<Card className={styles.good + " container"}>
		<img src={props.image} alt="" className={styles.image} />
		<Subtitle1 className={styles.title}><a href="">{props.title}</a></Subtitle1>
		<div className={styles.flex}>
			<Body1 className={styles.option}>30 см</Body1>
			<Body1 className={styles.option}>Тонкое тесто</Body1>
			<Title3 className={styles.price}>{props.price} руб.</Title3>
		</div>
		<div className={styles.flex}>
			<Button icon={<VehicleCarProfileLtrRegular />} className={styles.button} appearance="primary">Купить сейчас</Button>
			<Button icon={<CartRegular />} className={styles.button}>В корзину</Button>
		</div>
	</Card>
);

const loadGoods = async (server: string, setGoods: Function, setLoaded: Function) => {
	const response = await fetch(server);
	const json = await response.json();

	setTimeout(() => {
		setGoods(json.list);
		setLoaded(true);
	}, 1000)
};

interface GoodResponse {
	image: string,
	name: string,
	description: string,
	price: number,
	options: { name: string, values: string[] }[]
};

export const Catalog = (): JSX.Element => {
	const [loaded, setLoaded] = useState(false);
	const [goods, setGoods] = useState<GoodResponse[]>([]);

	if (!loaded) {
		loadGoods('https://ifb24m.github.io/near-food/api/catalog/pizza.json', setGoods, setLoaded);
	}

	console.log(goods);

	if (loaded) {
		return (
			<div className={styles.goods + " container"}>
				{goods.map((good, index) => (<Good key={index} price={good.price} image={good.image} title={good.name} />))}
			</div>
		);
	}
	else {
		return (
			<Spinner />
		)
	}
};