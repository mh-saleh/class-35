import React from "react";
import List from "./List";

const Menu = ({ className }) => {
  return (
    <div className={` ${className}`}>
      <ul className="">
        <List text="Men"></List>
        <List text="Woman"></List>
        <List text="Kids"></List>
        <List text="Collection"></List>
        <List text="Trends"></List>
      </ul>
    </div>
  );
};

export default Menu;
