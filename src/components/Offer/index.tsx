import styles from './index.module.scss';
import React from 'react';

import { IOffer } from '../../interfaces/IOffer.interface';

import { Button, Card, Title3 } from '@fluentui/react-components';

export const Offer = (props: IOffer): React.ReactElement => {
	return (
		<Card className={styles.wrapper}>
			<div className={styles.block}>
				<Title3 className={styles.title}>{props.name}</Title3>
				<Button appearance='primary' as='a' href={props.url}>Перейти</Button>
			</div>
			<div className={styles.block}>
				<img className={styles.image} src={props.image} alt="Картинка" />
			</div>
		</Card>
	);
};