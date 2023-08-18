import styles from "./index.module.scss";

import { Card, Title2, Body1, Button, Link } from "@fluentui/react-components";

export interface CategoryResponse {
	list: CategoryProps[]
}

export interface CategoryProps {
	image: string,
	copyright_link: string,
	copyright_text: string,
	name: string,
	description: string,
	id: string
};

export const Category = (props: CategoryProps): JSX.Element => {
	return (
		<Card className={styles.card}>
			<div className={styles.block}>
				<Title2>{props.name}</Title2>
				<Body1>{props.description}</Body1>
				<Button appearance="primary" as="a" href={`?page=catalog&catalog=${props.id}`}>Перейти</Button>
			</div>
			<div className={styles.block}>
				<img src={props.image} alt="" className={styles.image} />
				<Link className={styles.copyright} href={props.copyright_link}>{props.copyright_text}</Link>
			</div>
		</Card>
	);
};