

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    pageNumbers: number[];
    onPageChange: (newPage: number) => void;
}

const Pagination = (props: PaginationProps) => {

    const pages = new Array(props.totalPages).fill(null).map((v, i) => i)
    const pagesSlice = pages.slice(props.pageNumbers[0], props.pageNumbers[1])
    

    return (
        <>
            {props.currentPage}

            {pagesSlice.map((pageIndex) => (
                <button
                key={pageIndex} 
                className={pageIndex === props.currentPage ? "buttonActive" : ""}
                onClick={() => props.onPageChange(pageIndex)}>{pageIndex}</button>
            ))}
        </>
    )
}

export default Pagination