import React from "react";

export function usePagination({totalCount, currentPage, pageSize, siblingCount = 1 }) {

    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);
        const totalPageNumbers = siblingCount + 3;

        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
          }

    }, [totalCount, currentPage, pageSize, siblingCount]);

    

    return(
        paginationRange
    )
}