import React from "react";

interface ITotalPriceProps {
  income: number,
  outcome: number
}

const TotalPrice: React.FC<ITotalPriceProps> = (props) => {
  return <div className="list-group list-group-horizontal">
    <span className="list-group-item">{`income:${props.income}`}</span>
    <span className="list-group-item">{`outcome:${props.outcome}`}</span>
  </div>;
};

export default TotalPrice;
