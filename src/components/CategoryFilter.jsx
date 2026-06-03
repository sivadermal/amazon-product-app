import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/filterSlice";

const CategoryFilter = ({ categories }) => {
    const dispatch = useDispatch();

    const selectedCategory = useSelector(
        (state) => state.filters.category
    );

    return (
        <div className="filter-section">
            <h4>Categories</h4>

            {categories.map((category) => {
                const categoryValue =
                    category.slug || category;

                const categoryLabel =
                    category.name || category;

                return (
                    <div
                        key={categoryValue}
                        className="checkbox-item"
                    >
                        <input
                            type="checkbox"
                            id={categoryValue}
                            checked={
                                selectedCategory === categoryValue
                            }
                            onChange={() =>
                                dispatch(
                                    setCategory(
                                        selectedCategory === categoryValue
                                            ? ""
                                            : categoryValue
                                    )
                                )
                            }
                        />

                        <label htmlFor={categoryValue}>
                            {categoryLabel}
                        </label>
                    </div>
                );
            })}
        </div>
    );
};

export default CategoryFilter;