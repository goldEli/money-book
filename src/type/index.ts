export interface IPriceListItem {
  id: number;
  title: string;
  price: number;
  date: string;
  category: {
    id: string;
    name: "outcome" | "incone";
    type: "outcome" | "incone";
  };
}
