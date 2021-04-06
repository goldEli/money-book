import React from "react";
import classnames from "classnames";
import Ionicon from "react-ionicons";

interface IViewTabProps {
  activeTab: "list" | "charts";
  onTabChange: (cur: "list" | "charts") => void;
}

const ViewTab: React.FC<IViewTabProps> = (props) => {
  return (
    <ul className="nav nav-tabs nav-fill my-4">
      <li className="nav-item">
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
      <li className="nav-item">
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
