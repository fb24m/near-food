![image](https://github.com/iFB24M/near-food/assets/103760918/1a4c4c9b-7d44-4825-980b-473898686f64)

# Near Food - Приложение доставки еды на React

<div style="display:flex;gap:8px;flex-wrap:wrap">
<img src="https://img.shields.io/badge/TypeScript-blue">
<img src="https://img.shields.io/badge/SCSS-e28c9a">
<img src="https://img.shields.io/badge/React-4fafc9">
<img src="https://img.shields.io/badge/Fluent_UI-aaa4f0">
<img src="https://img.shields.io/badge/React_Query-f0513c">
<img src="https://img.shields.io/badge/Axios-671ddf">
<img src="https://img.shields.io/badge/Vite-f2a000">
</div>

Полностью рабочий Frontend приложения доставки еды Near Food на React. Подгружает данные в реальном времени из имитации API

## Результат

Исходный код - [https://github.com/ifb24m/near-food](https://github.com/iFB24M/near-food/tree/source)

Приложение - https://near-food.fb24m.ru

## Запуск - npm run dev
Запуск приложения только для разработки, данные храняться в памяти
## Сборка - npm run build
Сборка приложения для деплоя, один файл на каждый язык, JavaScript
## Превью - npm run preview
Превью готового собранного приложения на локальном сервере

## Документация API
Список категорий - https://near-food.fb24m.ru/api/categories/categories.json

Структура:

```TypeScript
interface ICategory {
  id: string
  name: string
  description: string
  image: string
  copyright_link: string
  copyright_text: string
}
interface CategoryResponse {
  list: ICategory[]
}
```

Список каталога - https://near-food.fb24m.ru/api/catalog/NAME.json

NAME - burgers / pizza / shashlik

Структура
```TypeScript
interface ICatalog {
  image: string
  name: string
  description: string
  price: number
  options?: {
    name: string
    values: { value: string, price: number }[]
  }[]
}
interface CatalogResponse {
  list: ICatalog[]
}
```

Корзина - https://near-food.fb24m.ru/api/cart/cart.json

Структура
```TypeScript
interface ICart {
  image: string
  name: string
  description: string
  price: number
  count: number
}
interface CartResponse {
  list: ICart[]
}
```

Акции - https://near-food.fb24m.ru/api/offers/offers.json

```TypeScript
interface IOffer {
  name: string
  url: string
  image: string
}
intergace OffersResponse {
  list: IOffer[]
}
```
