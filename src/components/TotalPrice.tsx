import React from "react";

interface ITotalPriceProps {
  income: number,
  outcome: number
}

const TotalPrice: React.FC<ITotalPriceProps> = (props) => {
  return <div className="row">
    <span className="col-sm">{`income:${props.income}`}</span>
    <span className="col-sm">{`outcome:${props.outcome}`}</span>
  </div>;
};

export default TotalPrice;
