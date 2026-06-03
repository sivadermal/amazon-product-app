import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setMinPrice,
  setMaxPrice
} from "../redux/filterSlice";

const PriceFilter = () => {
  const dispatch = useDispatch();

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const applyFilter = () => {
    dispatch(setMinPrice(min));
    dispatch(setMaxPrice(max));
  };

  return (
    <div className="price-filter">
      <h4>Price Range</h4>

      <div className="price-inputs">
        <input
          type="number"
          placeholder="Min"
          value={min}
          onChange={(e) =>
            setMin(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Max"
          value={max}
          onChange={(e) =>
            setMax(e.target.value)
          }
        />
      </div>

      <button
        className="apply-btn"
        onClick={applyFilter}
      >
        Apply
      </button>
      <div>
      </div>
    </div>
  );
};

export default PriceFilter;