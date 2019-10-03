import React from "react";
import Item from "./Item";
import "../styles/itemList.css";

const ItemsList = props => {
  if (!props.img_url) return <h1>Loading</h1>;
  return (
    <div className="itemList">
      {props.img_url.map((e, i) => {
        return <Item src={e.img_url} alt={i} />;
      })}
    </div>
  );
};
export default ItemsList;
