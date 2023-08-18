import styles from "./index.module.scss";

import { useState } from "react";
import { Spinner } from "@fluentui/react-components";

import { Good } from "../../blocks/Good";

import { request, GoodResponse, IGood } from "../../functions/request";
import { getQueryVariable } from "../../functions/getQueryVariable";

const catalog = getQueryVariable('catalog');

export const Catalog = (): JSX.Element => {
	const [loaded, setLoaded] = useState(false);
	const [goods, setGoods] = useState<IGood[]>([]);

	if (!loaded) {
		request(`https://ifb24m.github.io/near-food/api/catalog/${catalog}.json`, (json: GoodResponse) => {
			setGoods(json.list);
			setLoaded(true);
		});
	}

	if (!loaded) return <Spinner />

	return (
		<div className={styles.goods + " container"}>
			{goods.map((good, index) => (
				<Good key={index} index={index} price={good.price} image={good.image} title={good.name} />
			))}
		</div>
	);
};