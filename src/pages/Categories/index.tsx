import styles from "./index.module.scss";

import { useState } from "react";

import { Category, CategoryProps, CategoryResponse } from "../../blocks/Category";
import { request } from "../../functions/request";
import { Spinner } from "@fluentui/react-components";

export const Categories = (): JSX.Element => {
	const [loaded, setLoaded] = useState(false);
	const [list, setList] = useState<CategoryProps[]>([]);

	if (!loaded) {
		request('../../../src/categories.json', (json: CategoryResponse) => {
			setList(json.list);
			setLoaded(true);
		})
	}

	if (!loaded) return <Spinner />


	return (
		<div className={styles.categories}>
			<div className="container">
				{list.map((item, key) => (
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
	);
};