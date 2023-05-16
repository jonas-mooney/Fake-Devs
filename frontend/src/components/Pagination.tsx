import '../devBox.scss'

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    pageNumbers: number[];
    onPageChange: (newPage: number) => void;
    handleFivePageView: (newPagesArray: number[]) => void;
}

const Pagination = ({totalPages, currentPage, pageNumbers, onPageChange, handleFivePageView}: PaginationProps) => {

    const pages = new Array(totalPages).fill(null).map((v, i) => i)
    const pagesSlice = pages.slice(pageNumbers[0], pageNumbers[1])

    const handlePageViewUpOrDown = (pageUpOrDown: boolean) => {
        const pageArrayCopy = [...pageNumbers]
        const pageArrayLast = pageArrayCopy.pop() ?? 0
        const pageArrayFirst = pageArrayCopy.shift() ?? 0
        // above line uses the nullish coalescing operator '??' to set pageArrayLast to 0 if the pageArrayCopy.pop() returns undefined.

        if (pageUpOrDown === true && (pageArrayLast < totalPages)) {
            const pageIncrement = pageNumbers.map((s) => ++s)
            handleFivePageView(pageIncrement)
            // As trippy as this may seem, the prefix operator is needed.
            // If a postfix operator was used, the map function would return 's' before the increment took place.
        }
        else if (pageUpOrDown === false && (pageArrayFirst > 1)) {
            const pageDecrement = pageNumbers.map((s) => --s)
            handleFivePageView(pageDecrement)
        }
    }
    

    return (
        <div>

            <button onClick={() => handlePageViewUpOrDown(false)}>less than</button>

            {pagesSlice.map((pageIndex) => (
                <button
                key={pageIndex} 
                className={pageIndex === currentPage ? "paginationButtonActive" : ""}
                onClick={() => onPageChange(pageIndex)}>{pageIndex}</button>
            ))}

            <button onClick={() => handlePageViewUpOrDown(true)}>greater than</button>
        </div>
    )
}

export default Pagination