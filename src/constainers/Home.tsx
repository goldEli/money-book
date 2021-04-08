import React from "react";
import CreateBtn from "src/components/CreateBtn";
import MonthPicker from "src/components/MonthPicker";
import PriceList from "src/components/PriceList";
import TotalPrice from "src/components/TotalPrice";
import ViewTab from "src/components/ViewTab";
import {
  ICategorys,
  IPriceListItem,
  IPriceListItemWithCategory,
  ListView,
} from "src/type";
import { parseToYearAndMonth } from "src/utils";
import logo from "../logo.svg";

interface IHomeProps {}

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

const Home: React.FC<IHomeProps> = (props) => {
  const [currentDate, setCurrentDate] = React.useState(parseToYearAndMonth());
  const [tabView, setTabView] = React.useState<ListView>("list");
  const [items, setItems] = React.useState(data);
  const itemsWithCatepory = items.map((item) => ({
    ...item,
    category: categorys[item.cid],
  }));
  const totalIncome = itemsWithCatepory.reduce((res, item) => {
    return res + (item.category.type === "income" ? item.price : 0);
  }, 0);
  const totalOutcome = itemsWithCatepory.reduce((res, item) => {
    return res + (item.category.type === "outcome" ? item.price : 0);
  }, 0);

  const addItem = () => {};

  const modifyItem = () => {};

  const deleteItem = () => {};

  return (
    <>
      <header className="App-header">
        <div className="row mb-5">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="row px-3 py-3">
          <div className="col">
            <MonthPicker
              onChange={(num, key) => {
                setCurrentDate((old) => {
                  return { ...old, [key]: num };
                });
              }}
              year={currentDate.year}
              month={currentDate.month}
            />
          </div>
          <div className="col">
            <TotalPrice income={totalIncome} outcome={totalOutcome} />
          </div>
        </div>
      </header>
      <div className="content-area py-3 px-3">
        <ViewTab
          activeTab={tabView}
          onTabChange={(cur) => {
            setTabView(cur);
          }}
        />
        <CreateBtn />
        <PriceList
          onDeleteItem={(item) => {
            setItems((old) => old.filter((i) => item.id !== i.id));
          }}
          onModifyItem={(item) => {
            setItems((old) =>
              old.map((i) => {
                if (i.id === item.id) {
                  return { ...i, name: "modify" };
                }
                return i;
              })
            );
          }}
          items={itemsWithCatepory}
        />
      </div>
    </>
  );
};

export default Home;
