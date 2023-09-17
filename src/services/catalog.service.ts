import axios from "axios";
import { CategoryResponse } from "../components/Category";
import { ICart } from '../interfaces/ICart.interface';
import { IOffer } from "../interfaces/IOffer.interface";

const api = 'https://near-food.fb24m.ru/api';

interface IQueryService {
	categories: Function;
	goods: Function;
	cart: Function;
	offers: Function;
}

export const queryService: IQueryService = {
	categories: () => axios.get<CategoryResponse>(`${api}/categories/categories.json`),
	goods: (goodType: string) => axios.get<CategoryResponse>(`${api}/catalog/${goodType}.json`),
	cart: () => axios.get<ICart>(`${api}/cart/cart.json`),
	offers: () => axios.get<IOffer>(`${api}/offers/offers.json`),
};