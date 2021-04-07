import React from "react";
import MonthPicker from "src/components/MonthPicker";
import PriceList from "src/components/PriceList";
import TotalPrice from "src/components/TotalPrice";
import ViewTab from "src/components/ViewTab";
import { IPriceListItem } from "src/type";
import logo from "../logo.svg";

interface IHomeProps {}

const items: IPriceListItem[] = [
  {
    id: 1,
    title: "Trivel to Japan",
    price: 200,
    date: "2018-09-10",
    category: {
      id: "1",
      type: "outcome",
      name: "outcome",
      icon: "ios-plane",
    },
  },
  {
    id: 2,
    title: "Trivel to Hongkong",
    price: 200,
    date: "2018-09-10",
    category: {
      id: "1",
      type: "outcome",
      name: "outcome",
      icon: "ios-plane",
    },
  },
];

const Home: React.FC<IHomeProps> = (props) => {
  return (
    <div className="App">
      <header className="App-header row">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="row col-12">
          <div className="col-6">
            <MonthPicker year={2018} month={2} />
          </div>
          <div className="col-6">
            <TotalPrice income={1000} outcome={1000} />
          </div>
        </div>
      </header>
      <ViewTab activeTab="list" onTabChange={() => {}} />
      <PriceList onDeleteItem={() => {}} onModifyItem={() => {}} items={items} />
    </div>
  );
};

export default Home;
