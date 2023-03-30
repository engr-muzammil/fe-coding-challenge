export interface BurgerPriceProps {
    name: string;
    basePrice: number;
    BurgerIndex: number;
    AddOrder: (BurgerIndex: number, index: number) => void
  }
  