export interface IPriceListItem {
  id: number;
  title: string;
  price: number;
  date: string;
  cid: string;
}
export interface ICategory {
  id: string;
  icon: string;
  name: "outcome" | "income";
  type: "outcome" | "income";
}
export interface ICategorys {
  [key: string]: ICategory;
}
export interface IPriceListItemWithCategory {
  id: number;
  title: string;
  price: number;
  date: string;
  cid: string;
  category: ICategory;
}

export type ListView = "list" | "charts";
