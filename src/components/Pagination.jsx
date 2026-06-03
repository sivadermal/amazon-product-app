import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../redux/filterSlice";

const Pagination = ({ totalPages }) => {
    const dispatch = useDispatch();

    const currentPage = useSelector(
        (state) => state.filters.currentPage
    );

    const handlePageChange = (page) => {
        dispatch(setCurrentPage(page));
    };

    let startPage = Math.max(
        currentPage - 1,
        1
    );

    let endPage = Math.min(
        startPage + 2,
        totalPages
    );

    if (endPage - startPage < 2) {
        startPage = Math.max(
            endPage - 2,
            1
        );
    }

    const pages = [];

    for (
        let i = startPage;
        i <= endPage;
        i++
    ) {
        pages.push(i);
    }

    return (
        <div className="pagination">

            <button
                disabled={currentPage === 1}
                onClick={() =>
                    handlePageChange(
                        currentPage - 1
                    )
                }
            >
                ← Previous
            </button>

            {pages.map((page) => (
                <button
                    key={page}
                    className={
                        currentPage === page
                            ? "active-page"
                            : ""
                    }
                    onClick={() =>
                        handlePageChange(page)
                    }
                >
                    {page}
                </button>
            ))}

            <button
                disabled={
                    currentPage === totalPages
                }
                onClick={() =>
                    handlePageChange(
                        currentPage + 1
                    )
                }
            >
                Next →
            </button>

        </div>
    );
};

export default Pagination;