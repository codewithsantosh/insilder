import React from "react";
import { Menu } from "antd";
import "./style.css";
import "./CSS/style.css";
export default function comofLayout() {
  return (
    <div>
      <Menu  className="menu-container"
        mode="horizontal"
        items={[
          {
            label: "Event in Bengarulu",
            key: "home",
          },
          {
            label: "Online Envents",
            key: "OEvent",
          },
          {
            label: "Corporate Events",
            key: "Cor-event",
          },
        ]}
        
      >
   

      </Menu>
    </div>
  );
}
