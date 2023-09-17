import React from 'react';

import { useRequest } from '../../hooks/useRequest';
import { QueryTypes } from '../../enums/queryTypes.enum';

import { Spinner, Title2 } from '@fluentui/react-components';
import { Offer } from '../Offer';
import { IError } from '../../interfaces/error.interface';
import { OffersResponse } from '../../interfaces/IOffer.interface';
import { Error } from '../Error';

import { Swiper, SwiperSlide } from 'swiper/react';

export const Offers = (): React.ReactElement => {
	const { isLoading, isSuccess, error, data } = useRequest(QueryTypes.offers);

	if (isLoading) return <Spinner />;

	if (isSuccess) return (
		<>
			<Title2>Акции</Title2>
			<Swiper slidesPerView={1} loop={true} spaceBetween={16} breakpoints={{
				900: {
					slidesPerView: 2
				}
			}}>
				{(data as OffersResponse).list.map((offer, index) =>
					<SwiperSlide key={index}>
						<Offer name={offer.name} url={offer.url} image={offer.image} />
					</SwiperSlide>)}
			</Swiper>
		</>
	);

	else return <Error message={(error as IError).message} code={(error as IError).response.status} />
};