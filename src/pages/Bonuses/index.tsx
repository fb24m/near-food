import styles from './index.module.scss';
import React from 'react';

import {
	Body1, Body1Strong, Button, Card, Title2, Dialog,
	DialogTrigger,
	DialogSurface,
	DialogTitle,
	DialogBody,
	DialogActions,
	DialogContent,
	Select,
	Title3,
} from '@fluentui/react-components';

import { Offers } from '../../components/Offers';

export const Bonuses = (): React.ReactElement => {
	return (
		<div className="container">
			<Offers />
			<Title2 className={styles.title}>Персональные предложения</Title2>
			<div className={styles.cards}>
				<Card className={styles.card}>
					<div className={styles.bonuses}>
						<Title3 className={styles.bonusesTitle}>75</Title3> <Body1Strong>бонусов</Body1Strong>
					</div>
					<Body1Strong className={styles.description}>Вы будете получать 1% от цены каждого товара</Body1Strong>
					<Dialog>
						<DialogTrigger disableButtonEnhancement>
							<div>
								<Button appearance='primary'>Потратить</Button>
							</div>
						</DialogTrigger>
						<DialogSurface className={styles.dialog}>
							<DialogBody>
								<DialogTitle>Как потратить бонусы?</DialogTitle>
								<DialogContent>
									<Body1 className={styles.text}>За бонусы вы можете приобрести некоторые позиции в нашем меню. Выберите из списка интересующую и нажмите "В корзину".</Body1>
									<Select>
										<option value="">Шашлык с курицей - 120 бонусов</option>
										<option value="">Ночной бургер - 50 бонусов</option>
										<option value="">Маргарита - 70 бонусов</option>
										<option value="">Пепперони - 100 бонусов</option>
									</Select>
								</DialogContent>
								<DialogActions>
									<DialogTrigger disableButtonEnhancement>
										<Button>Закрыть</Button>
									</DialogTrigger>
									<Button appearance="primary">В корзину</Button>
								</DialogActions>
							</DialogBody>
						</DialogSurface>
					</Dialog>
				</Card>
				<Card className={styles.card}>
					<Title3>Накопить бонусы</Title3>
					<Body1Strong className={styles.description}>Узнайте, как накопить бонусы</Body1Strong>
					<Dialog>
						<DialogTrigger disableButtonEnhancement>
							<div>
								<Button appearance='primary'>Накопить</Button>
							</div>
						</DialogTrigger>
						<DialogSurface className={styles.dialog}>
							<DialogBody>
								<DialogTitle>Как накопить бонусы?</DialogTitle>
								<DialogContent>
									Заказывая через наш сайт или приложение, вы получаете бонусы. Их количество зависит от количества товаров, их цены и выбранных опций. Чем больше заказываете одним чеком - тем больше бонусов. К примеру, ваш множитель - х1. Если вы закажете 3 товара на 300 рублей, вы получите 3%, то есть 3 бонуса.
								</DialogContent>
								<DialogActions>
									<DialogTrigger disableButtonEnhancement>
										<Button appearance="primary">Понятно</Button>
									</DialogTrigger>
								</DialogActions>
							</DialogBody>
						</DialogSurface>
					</Dialog>
				</Card>
			</div>
		</div>
	);
};