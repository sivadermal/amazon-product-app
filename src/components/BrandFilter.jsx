import React from "react";
import { useDispatch } from "react-redux";
import { setBrand } from "../redux/filterSlice";

const BrandFilter = ({ brands }) => {

    const dispatch = useDispatch();

    return (
        <div style={{ marginTop: "10px" }}>
        <select
            onChange={(e) =>
                dispatch(setBrand(e.target.value))
            }
        >
            <option value="">
                All Brands
            </option>

            {brands.map((brand) => (
                <option
                    key={brand}
                    value={brand}
                >
                    {brand}
                </option>
            ))}
        </select>
        </div>
    );
};

export default BrandFilter;