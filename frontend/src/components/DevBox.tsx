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

  const [queryObject, setQueryObject] = useState({
    order: { highLow: 0, starDescending: false },
    range: [ 25, 40 ]
  })

  const [pageTotal, setPageTotal] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [paginationNumbersDisplayed, setPaginationNumbersDisplayed] = useState([])

  const pages = new Array(pageTotal).fill(null).map((v, i) => i)
  const pagesSlice = pages.slice(pageNumber, pageNumber + 5)

    useEffect( () => {
        // prop.handleLoading(true)
        // prop.handleLoading(false)

        async function fetchData() {
            // console.log(queryObject)
            try {
                axios.post(`http://localhost:5444/devs?page=${pageNumber}`, queryObject).then((res) => {
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
            range: filterData.range
        })
    }
    //sdfsdfsdfsdf

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
        {pagesSlice.map((pageIndex) => (
            <button key={pageIndex} onClick={() => setPageNumber(pageIndex)}>{pageIndex + 1}</button>
            // at this point, the api call will need to take place on pageNumber state update.
            // Considering combining my useEffect with the handleSubmit function so that they can both
            // depend on that state. 
        ))}
    </div>
    </>
    )
}

export default DevBox