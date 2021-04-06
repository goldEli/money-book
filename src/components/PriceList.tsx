import React from "react";
import { IPriceListItem } from "src/type";

interface IPriceListProps {
  items: IPriceListItem[];
  onModifyItem: (item?: IPriceListItem) => void;
  onDeleteItem: (item?: IPriceListItem) => void;
}

const PriceList: React.FC<IPriceListProps> = (props) => {
  return (
    <ul className="list-group list-group-flush">
      {props.items.map((item) => {
        return (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="col-1 badge bg-primary">{item.category.name}</span>
            <span className="col-5">{item.title}</span>
            <span className="col-2 fw-bold">{`${
              item.category.type === "incone" ? "+" : "-" + item.price
            }元`}</span>
            <span className="col-2">{item.date}</span>
            <button
              onClick={() => props.onModifyItem(item)}
              className="col-1 btn btn-primary"
            >
              edit
            </button>
            <button
              onClick={() => props.onDeleteItem(item)}
              className="col-1 btn btn-danger"
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default PriceList;
