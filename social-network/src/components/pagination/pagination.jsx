import React from "react";
import '../../assets/styles/components/pagination.css';

export const Pagination = ({handlePrevious, handleNext, currentPage, pages })=>{
    return(
        <div className="pagination__post">
            <button
                onClick={handlePrevious}
                disabled = {currentPage === 1}
                className="pagination__post-button"
            >
                Previus
            </button>
            <button
                onClick={handleNext}
                disabled={currentPage === pages}
                className="pagination__post-button"
            >
                Next
            </button>
        </div>
    );
}