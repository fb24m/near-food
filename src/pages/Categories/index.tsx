import styles from "./index.module.scss";

import { useRequest } from "../../hooks/useRequest";

import { QueryTypes } from "../../enums/queryTypes.enum";
import { IError } from "../../interfaces/error.interface";

import { Category, CategoryProps } from "../../components/Category";
import { RequestHandler } from "../../components/RequestHandler";

export const Categories = () => {
	const { isLoading, isError, isSuccess, error, data } = useRequest(QueryTypes.categories);

	return <RequestHandler
		states={{ isLoading, isError, isSuccess }}
		error={error as IError}
		body={
			<div className={styles.categories}>
				<div className="container">
					{data?.list.map((item: CategoryProps, key: number) => (
						<Category
							key={key}
							image={item.image}
							copyright_link={item.copyright_link}
							copyright_text={item.copyright_text}
							name={item.name}
							description={item.description}
							id={item.id} />
					))}
				</div>
			</div>
		}
	/>
}