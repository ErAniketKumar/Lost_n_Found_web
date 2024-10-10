import React from "react";
import { Link } from "react-router-dom";

const PaginationSection = ({ npage, currentPage, setCurrentPage }) => {
    // Added props
    const nextPage = () => {
        if (currentPage < npage) {
            // Corrected condition
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            // Corrected condition
            setCurrentPage(currentPage - 1);
        }
    };

    const changeCurrentPage = (id) => {
        setCurrentPage(id);
    };

    const numbers = [...Array(npage + 1).keys()].slice(1); 
    const pageNumbersToShow = 5; 
    const startPage = Math.floor((currentPage - 1) / pageNumbersToShow) * pageNumbersToShow + 1;
    const endPage = startPage + pageNumbersToShow - 1;

    const displayedNumbers = numbers.slice(startPage - 1, endPage);

    return (
        <div className="flex justify-center py-4">
            <ul className="flex space-x-2">
                <li className="page-item">
                    <Link
                        to="#"
                        className="page-link inline-block px-3 py-1 border border-gray-300 rounded text-gray-700 bg-white hover:bg-gray-200"
                        onClick={prevPage}
                    >
                        Prev
                    </Link>
                </li>
                {displayedNumbers.map((n, index) => (
                    <li
                        key={index}
                        className={`page-item ${currentPage === n ? "active" : ""}`}
                    >
                        <Link
                            className={`page-link inline-block px-3 py-1 border border-gray-300 rounded ${
                                currentPage === n
                                    ? "bg-blue-500 text-white"
                                    : "text-gray-700 bg-white hover:bg-gray-200"
                            }`}
                            onClick={() => changeCurrentPage(n)}
                            to="#"
                        >
                            {n}
                        </Link>
                    </li>
                ))}
                <li className="page-item">
                    <Link
                        to="#"
                        className="page-link inline-block px-3 py-1 border border-gray-300 rounded text-gray-700 bg-white hover:bg-gray-200"
                        onClick={nextPage}
                    >
                        Next
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default PaginationSection;
