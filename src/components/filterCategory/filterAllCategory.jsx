import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  clothingCategory,
  clothingColor,
  clothingSeason
} from "../../containers/api";
import FilterCategory from "./filterCategory";

const filterAllCategory = ({
  handleCategory,
  handleStyle,
  handleColor,
  handleSeasons,
  styles
}) => {
  return (
    <>
      <FilterCategory
        handle={handleCategory}
        options={clothingCategory}
        name={"CATEGORY"}
      />
      <FilterCategory handle={handleStyle} options={styles} name={"STYLE"} />
      <FilterCategory
        handle={handleColor}
        options={clothingColor.colors}
        name={"COLOR"}
      />
      <FilterCategory
        handle={handleSeasons}
        options={clothingSeason.seasons}
        name={"SEASONS"}
      />
    </>
  );
};

export default filterAllCategory;
