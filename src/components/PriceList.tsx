import React from "react";
import { IPriceListItemWithCategory } from "src/type";
import Ionicon from "react-ionicons";

interface IPriceListProps {
  items: IPriceListItemWithCategory[];
  onModifyItem: (item: IPriceListItemWithCategory) => void;
  onDeleteItem: (item: IPriceListItemWithCategory) => void;
}

const PriceList: React.FC<IPriceListProps> = (props) => {
  return (
    <ul className="list-group list-group-flush">
      {props.items.map((item) => {
        return (
          <li
            key={item.id}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          >
            <span className="col-1 ">
              <Ionicon
                className="rounded-circle badge bg-primary"
                fontSize={"30px"}
                color={"#fff"}
                style={{ padding: "5px" }}
                icon={item.category.icon}
              />
            </span>
            <span className="col-5">{item.title}</span>
            <span className="col-2 fw-bold">{`${
              item.category.type === "income" ? "+" : "-" + item.price
            }元`}</span>
            <span className="col-2">{item.date}</span>
            <a
              onClick={(e) => {
                e.preventDefault();
                props.onModifyItem(item);
              }}
              className="col-1"
            >
              <Ionicon
                className="rounded-circle badge bg-secondary"
                fontSize={"30px"}
                color={"#fff"}
                style={{ padding: "5px" }}
                icon="ios-create-outline"
              />
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                props.onDeleteItem(item);
              }}
              className="col-1"
            >
              <Ionicon
                className="rounded-circle badge bg-danger"
                fontSize={"30px"}
                color={"#fff"}
                style={{ padding: "5px" }}
                icon="ios-close"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PriceList;
