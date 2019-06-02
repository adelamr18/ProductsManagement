export class Product {
  productId: string;
  productImage: string;
  product: string;
  productDescription: string;
  productDescriptionLong: string;
  price: number;
  grossPrice: number;
  netPrice: number;
  productVariationId: number;
  numberOfPersons: number;
  toppings: Array<Topping>;
}
export class Topping {
  constructor(public id: number, public name: string, public maximumQuantity: number,
    public minimumQuantity: number, public position: number, public options: Array<Option>) { }
}
export class Option {
  constructor(public id: number, public name: string, public price: number) {}
}
