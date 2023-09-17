
export interface ICartGood {
	image: string
	name: string
	description: string
	price: number
	count: number
}
export interface ICart {
	list: ICartGood[]
}