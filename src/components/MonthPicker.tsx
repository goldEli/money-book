import React from "react";
import { range } from "src/utils";

interface IMonthPickerProps {
  year: number;
  month: number;
}

const MonthPicker: React.FC<IMonthPickerProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setIsOpen((prev) => !prev);
  };
  const yearRange = range(9, -4).map((item) => item + props.year);
  const monthRange = range(12, 1);
  return (
    <div className="dropdown month-picker-component">
      <h4>选择月份</h4>
      <button
        onClick={toggle}
        className="btn btn-lg btn-secondary dropdown-toggle"
      >
        {`${props.year}-${props.month}`}
      </button>
      <div
        className="dropdown-menu"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="row">
          <div className="col border-end">
            {yearRange.map((item) => {
              return <a className="dropdown-item">{`${item}年`}</a>;
            })}
          </div>
          <div className="col">
            {monthRange.map((item) => {
              return <a className="dropdown-item">{`${item}月`}</a>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthPicker;
