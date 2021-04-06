import React from "react";
import "./App.css";
import logo from "./logo.svg";
import PriceList from "./components/PriceList";
import ViewTab from "./components/ViewTab";
import TotalPrice from "./components/TotalPrice";
import MonthPicker from "./components/MonthPicker";

function App() {
  return (
    <div className="App">
      <header className="App-header row">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="row col-12">
          <div className="col-6">
            <MonthPicker  year={2018} month={2}/>
          </div>
          <div className="col-6">
            <TotalPrice income={1000} outcome={1000} />
          </div>
        </div>
      </header>
      <ViewTab activeTab="list" onTabChange={() => {}} />
      <PriceList
        onDeleteItem={() => {}}
        onModifyItem={() => {}}
        items={[
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
        ]}
      />
    </div>
  );
}

export default App;
