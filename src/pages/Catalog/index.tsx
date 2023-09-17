import styles from "./index.module.scss";
import React from 'react';

import { getQueryVariable } from "../../functions/getQueryVariable";
import { useRequest } from "../../hooks/useRequest";

import { IError } from "../../interfaces/error.interface";
import { QueryTypes } from "../../enums/queryTypes.enum";

import { Good, GoodProps } from "../../components/Good";
import { RequestHandler } from "../../components/RequestHandler";

const catalog: string = getQueryVariable('catalog');

export const Catalog = (): React.ReactElement => {
	const { isLoading, isError, isSuccess, error, data } = useRequest(QueryTypes.goods, catalog);

	return <RequestHandler
		states={{ isLoading, isError, isSuccess }}
		error={error as IError}
		body={
			<div className={styles.goods + " container"}>
				{data ? data.list.map((good: GoodProps, index: number) => (
					<Good key={index} index={index} price={good.price} image={good.image} name={good.name} />
				)) : ''}
			</div>
		}
	/>
};