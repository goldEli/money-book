import React from "react";
import classnames from "classnames";
import Ionicon from "react-ionicons";
import { ListView } from "src/type";

interface IViewTabProps {
  activeTab: ListView;
  onTabChange: (cur: ListView) => void;
}

const ViewTab: React.FC<IViewTabProps> = (props) => {
  return (
    <ul className="nav nav-tabs nav-fill my-4">
      <li
        className="nav-item"
        onClick={(e) => {
          e.preventDefault();
          props.onTabChange("list");
        }}
      >
        <a
          className={classnames("nav-link", {
            active: props.activeTab === "list",
          })}
          href="#"
        >
          <Ionicon
            className="rounded-circle me-2"
            fontSize={"25px"}
            color={"#007bff"}
            icon={"ios-paper"}
          />
          列表模式
        </a>
      </li>
      <li
        className="nav-item"
        onClick={(e) => {
          e.preventDefault();
          props.onTabChange("charts");
        }}
      >
        <a
          className={classnames("nav-link", {
            active: props.activeTab === "charts",
          })}
          href="#"
        >
          <Ionicon
            className="rounded-circle me-2"
            fontSize={"25px"}
            color={"#007bff"}
            icon={"ios-pie"}
          />
          图表模式
        </a>
      </li>
    </ul>
  );
};

ViewTab.defaultProps = {
  activeTab: "list",
};

export default ViewTab;
