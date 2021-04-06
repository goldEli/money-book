import React from "react";
import "./App.css";
import logo from "./logo.svg";
import PriceList from "./components/PriceList";
import ViewTab from "./components/ViewTab";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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
