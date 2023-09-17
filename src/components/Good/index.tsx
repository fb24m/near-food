import styles from "./index.module.scss";

import { Title3, Subtitle1, Card, Button } from "@fluentui/react-components";
import { CartRegular, VehicleCarProfileLtrRegular } from "@fluentui/react-icons";

import { getQueryVariable } from "../../functions/getQueryVariable";

export interface GoodProps {
	image: string,
	name: string,
	price: number,
	index?: number,
}

const catalog: string | false = getQueryVariable('catalog');

export const Good = (props: GoodProps): JSX.Element => (
	<Card className={styles.good + " container"}>
		<a href={`?page=good&index=${props.index}&catalog=${catalog}`} className={styles.link}>
			<img src={props.image} alt="" className={styles.image} />
		</a>
		<Subtitle1 className={styles.title}><a href={`?page=good&index=${props.index}&catalog=${catalog}`}>{props.name}</a></Subtitle1>
		<div className={styles.flex}>
			<Title3 className={styles.price}>{props.price} руб.</Title3>
		</div>
		<div className={styles.flex}>
			<Button icon={<VehicleCarProfileLtrRegular />} className={styles.button} appearance="primary">Купить сейчас</Button>
			<Button icon={<CartRegular />} className={styles.button}>В корзину</Button>
		</div>
	</Card>
);