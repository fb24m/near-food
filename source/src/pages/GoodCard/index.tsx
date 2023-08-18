import css from "./index.module.scss";

import { useState } from "react";

import { getQueryVariable } from "../../functions/getQueryVariable";
import { request, IGood, GoodResponse } from "../../functions/request";

import { Spinner, Title1, Title2, Body1, RadioGroup, Radio, Label, Button } from "@fluentui/react-components";
import { CartRegular, VehicleCarProfileLtrRegular } from "@fluentui/react-icons";

const catalog: string | boolean = getQueryVariable('catalog');
const index: string | boolean = getQueryVariable('index');

export const GoodCard = (): JSX.Element => {
	const [loaded, setLoaded] = useState(false);
	const [good, setGood] = useState<IGood>();

	request(`https://ifb24m.github.io/near-food/api/catalog/${catalog}.json`, (json: GoodResponse) => {
		setGood(json.list[Number(index)]);
		setLoaded(true);
	});

	if (loaded) {
		return (
			<div className={css.goodCard + " container"}>
				<div className={css.block}>
					<img src={good!.image} alt="" className={css.image} />
				</div>
				<div className={css.block}>
					<Title1 className={css.title}>{good!.name}</Title1>
					<Body1 className={css.description}>{good!.description}</Body1>
					<Title2 className={css.price}>{good!.price} руб.</Title2>
					{good!.options ? good!.options.map((option, index) => (
						<div key={index}>
							<Label>{option.name}</Label>
							<RadioGroup className={css.selectGroup + " select-group"}>
								{option.values.map((value, index) => (
									index === 0
										? <Radio defaultChecked key={index} label={`${value.value} - ${value.price} руб.`} />
										: <Radio key={index} label={`${value.value} - ${value.price} руб.`} />
								))}
							</RadioGroup>
						</div>
					)) : ''}
					<div className={css.buttons}>
						<Button icon={<VehicleCarProfileLtrRegular />} appearance="primary">Заказать сейчас</Button>
						<Button icon={<CartRegular />}>В корзину</Button>
					</div>
				</div>
			</div>
		);
	}
	return <Spinner />
};