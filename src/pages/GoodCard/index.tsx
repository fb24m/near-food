import styles from "./index.module.scss";

import { Title2, Body1, Button } from "@fluentui/react-components";
import { CartRegular, VehicleCarProfileLtrRegular, OptionsRegular } from "@fluentui/react-icons";

import { IGood } from "../../functions/request";
import { getQueryVariable } from "../../functions/getQueryVariable";

import { OptionsList } from "./OptionsList";

import { IError } from "../../interfaces/error.interface";

import { useRequest } from "../../hooks/useRequest";
import { QueryTypes } from "../../enums/queryTypes.enum";
import { RequestHandler } from "../../components/RequestHandler";

const catalog = getQueryVariable('catalog');
const index: number = Number(getQueryVariable('index'));

export const GoodCard = (): JSX.Element => {
	const { isLoading, isError, isSuccess, error, data } = useRequest(QueryTypes.goods, catalog);

	if (!data) return <></>;

	let goods = data.list as IGood[];

	return <RequestHandler
		states={{ isLoading, isError, isSuccess }}
		error={error as IError}
		body={
			<div className={styles.goodCard + ' container'}>
				<img src={goods[index].image} className={styles.image} alt="" />
				<div className={styles.block}>
					<Title2>{goods[index].name}</Title2>
					<Body1>{goods[index].description}</Body1>
					{goods[index].options ? <OptionsList
						title={<><OptionsRegular /> Добавить дополнительные опции</>}
						options={goods[index].options!}
					/> : ''}
					<div className='buttons'>
						<Button icon={<CartRegular />} appearance='primary'>В корзину</Button>
						<Button icon={<VehicleCarProfileLtrRegular />}>Заказать сейчас</Button>
					</div>
				</div>
			</div>
		}
	/>
};