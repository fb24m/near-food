import styles from './index.module.scss';
import React from 'react';

import { Body1Strong, Button, Card, Input, Select, Title2 } from '@fluentui/react-components';

export const OrderDelivery = (): React.ReactElement => {
	return (
		<div className={`${styles.container} container`}>
			<form action="?/#/payment?type=delivery">
				<Card>
					<Title2>Доставка</Title2>
					<Body1Strong>Контактные данные</Body1Strong>
					<Input placeholder='Ваше имя' name='first-name' autoComplete='name' required />
					<Input placeholder='Номер телефона' name='phone' autoComplete='phone' required />
					<Body1Strong>Адрес</Body1Strong>
					<Select name='city'>
						<option value="Москва">Москва</option>
						<option value="Самара">Самара</option>
						<option value="Саратов">Саратов</option>
						<option value="Калининград">Калининград</option>
						<option value="Санкт-Петербург">Санкт-Петербург</option>
						<option value="Белгород">Белгород</option>
						<option value="Вашингтон">Вашингтон</option>
					</Select>
					<div className="inputs">
						<Input placeholder='Улица' name='street' required />
						<Input placeholder='Дом' name='house' required />
						<Input placeholder='Подъезд' name='entrance' required />
						<Input placeholder='Препятствия (код / др)' name='obstacles' required />
						<Input placeholder='Квартира / офис' name='apartment' required />
					</div>
					<div className="buttons">
						<Button type='submit' appearance='primary'>К оплате</Button>
						<Button type='reset'>Сбросить</Button>
					</div>
				</Card>
			</form>
		</div>
	);
};