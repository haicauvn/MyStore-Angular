export interface ProductListModal {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;
  amount?: number;
}

export interface OptionModal {
  value: number;
  label: string
}