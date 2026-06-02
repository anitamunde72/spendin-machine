export interface Item {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

export interface Inventory {
  [itemId: string]: number;
}
