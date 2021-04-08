import React from "react";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PriceList from "../PriceList";
import { ICategorys, IPriceListItem } from "src/type";

const data: IPriceListItem[] = [
  {
    id: 1,
    title: "Trivel to Japan",
    price: 200,
    date: "2021-3-10",
    cid: "1",
  },
  {
    id: 2,
    title: "Trivel to Hongkong",
    price: 200,
    date: "2021-4-10",
    cid: "1",
  },
];

const categorys: ICategorys = {
  "1": {
    id: "1",
    type: "outcome",
    name: "outcome",
    icon: "ios-plane",
  },
  "2": {
    id: "2",
    type: "outcome",
    name: "outcome",
    icon: "ios-plane",
  },
};
const itemsWithCatepory = data.map((item) => ({
  ...item,
  category: categorys[item.cid],
}));

const props = {
  items: itemsWithCatepory,
  onModifyItem: jest.fn(),
  onDeleteItem: jest.fn(),
};
describe("test PriceList component", () => {
  let container: HTMLElement;
  beforeEach(() => {
    const r = render(<PriceList {...props} />);
    container = r.container;
  });
  it("should render the component to match snapshot", () => {
    // render(<TotalPrice income={1000} outcome={2000} />);
    // const incomeElement = screen.getByText(/income:1000/i);
    // const outcomeElement = screen.getByText(/outcome:2000/i);
    // expect(incomeElement).toBeInTheDocument();
    // expect(outcomeElement).toBeInTheDocument();
  });
  it("should render correct price items length", () => {});
  it("should render correct icon and price for each item", () => {});
  it("should trigger the correct function callback", async () => {
    let firstItem = container.firstChild?.firstChild;
    let deleteBtn = firstItem?.lastChild;
    let modifyBtn = firstItem?.childNodes[4]

    deleteBtn && userEvent.click(deleteBtn);
    modifyBtn && userEvent.click(modifyBtn);

    expect(props.onDeleteItem).toHaveBeenCalledWith(itemsWithCatepory[0]);
    expect(props.onModifyItem).toHaveBeenCalledWith(itemsWithCatepory[0]);

  });
});
