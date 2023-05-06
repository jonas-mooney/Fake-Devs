import React, {useState, useEffect} from "react"
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import '../App.scss'

import Filters from "./Filters"

interface HandleLoadingFunc {
    handleLoading: (arg: boolean) => void;
}

interface FilterData {
    order: {
        highLow: number;
        starDescending: boolean;
    }
    range: number[]
}

const DevBox = (prop: HandleLoadingFunc) => {
    // refactor all of these useState into a useReducer
    const [devs, setDevs] = useState([])
    const [pageTotal, setPageTotal] = useState(0)
    //   const [pageNumber, setPageNumber] = useState(1)
    const [pageNumbersDisplayed, setPageNumbersDisplayed] = useState<Array<number>>([1, 6])

  
    const [queryObject, setQueryObject] = useState({
        order: { highLow: 0, starDescending: false },
        range: [ 25, 40 ],
        page: 1
    })
    
    const pages = new Array(pageTotal).fill(null).map((v, i) => i)
    // const pagesSlice = pages.slice(queryObject.page, queryObject.page + 5)
    const pagesSlice = pages.slice(pageNumbersDisplayed[0], pageNumbersDisplayed[1])

    // pagesSlice needs to be a slice of five at a time out of the page total.
    // Instead of slicing on the queryObject.page, this should maintain its own state.
    // Perhaps currentPage and paginationNumbersDisplayed


    useEffect( () => {
        // prop.handleLoading(true)
        // prop.handleLoading(false)

        async function fetchData() {
            // console.log(queryObject)
            try {
                axios.post(`http://localhost:5444/devs?page=${queryObject.page}`, queryObject).then((res) => {
                    setDevs(res.data.devs)
                    setPageTotal(res.data.totalPages)
                })

            } catch (err) { 
                console.log(err);
            }
        };
        fetchData();

    }, [queryObject]);

    // The second argument of useEffect function is referred to as the “dependency array”. When the variable included inside the array didn’t change, the function passed as the first argument won’t be executed.
    // The empty array indicates that the effect doesn’t have any dependencies to watch for change, and without a trigger, it won’t be run after the component is mounted.
    // You can also add a return statement to useEffect that will fire on unmount
    // see https://sebhastian.com/react-usestate-useeffect-hooks/

    const handleSubmit = (filterData: FilterData) => {
        setQueryObject({
            ...queryObject,
            order: filterData.order,
            range: filterData.range,
        })
    }

    const handlePaginationNumberClick = (arg: number) => {
        setQueryObject({
            ...queryObject,
            page: arg
        })
    }

    const handlePageViewUpOrDown = (arg: boolean) => {
        const pageArrayCopy = [...pageNumbersDisplayed]
        const pageArrayLast = pageArrayCopy.pop() ?? 0
        const pageArrayFirst = pageArrayCopy.shift() ?? 0
        // above line uses the nullish coalescing operator '??' to set pageArrayLast to 0 if the pageArrayCopy.pop() returns undefined.

        if (arg === true && (pageArrayLast < pageTotal)) {
            const pageIncrement = pageNumbersDisplayed.map((s) => ++s)
            setPageNumbersDisplayed(pageIncrement)
            // As trippy as this may seem, the prefix operator is needed.
            // If a postfix operator was used, the map function would return 's' before the increment took place.
        }
        else if (arg === false && (pageArrayFirst > 1)) {
            const pageDecrement = pageNumbersDisplayed.map((s) => --s)
            setPageNumbersDisplayed(pageDecrement)
        }
    }

    const devList = devs.map(({first_name, last_name, email, hourly_rate, star_rating}) =>
            <div key={uuidv4()} className='devBox'>
                <div className='namef'>
                    <span className='firstn'>{first_name + ' '}</span>
                    <span className='lastn'>{last_name}</span>
                </div>
                <div className='email'>{email}</div>
                <div className='starhourly'>
                    <span className='star'>Rating: {star_rating}</span>
                    <span className='hourly'>Hourly Rate ${hourly_rate}</span>
                </div>
            </div>
    )

    return (
    <>
        <Filters handleSubmit={handleSubmit} />

        <div className="devDisplay">
            <div className="allDevsContainer">
                {devList}
            </div>
            <button onClick={() => handlePageViewUpOrDown(false)}>less than</button>
            {/* less than and greater than always shown to toggle not to the next group of five but */}
            {/* to the very next page. */}
            {pagesSlice.map((pageIndex) => (
                <button key={pageIndex} onClick={() => handlePaginationNumberClick(pageIndex)}>{pageIndex}</button>
            ))}
            <button onClick={() => handlePageViewUpOrDown(true)}>greater than</button>
        </div>
    </>
    )
}

export default DevBox