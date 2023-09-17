import styles from "./index.module.scss";

import { Button, Link } from "@fluentui/react-components";
import { CartRegular, PersonRegular, HomeRegular, TagRegular, StackRegular } from "@fluentui/react-icons";

export const Menu = (): JSX.Element => (
	<div className={styles.menu + " container"}>
		<div className={styles.logo}>Near Food</div>
		<ul className={styles.list}>
			<Link href="/" className={styles.item}><HomeRegular /> Главная</Link>
			<Link href="/#/offers" className={styles.item}><TagRegular />Акции</Link>
			<Link href="/#/categories" className={styles.item}><StackRegular />Каталог</Link>
		</ul>
		<div className={styles.login}>
			<Button as='a' href='/#/cart' icon={<CartRegular />}>Корзина</Button>
			<Button as='a' href='?page=login' icon={<PersonRegular />} appearance="primary">Кабинет</Button>
		</div>
	</div>
);