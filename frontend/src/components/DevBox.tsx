import React, {useState, useEffect} from "react"
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import '../App.scss'

import Filters from "./Filters"
import Pagination from "./Pagination";

interface HandleLoadingFunc {
    handleLoading: (arg: boolean) => void;
}

const DevBox = () => {
    const [devs, setDevs] = useState([])
    const [pageTotal, setPageTotal] = useState(0)
    const [pageNumbersDisplayed, setPageNumbersDisplayed] = useState<Array<number>>([1, 6])

  
    const [queryObject, setQueryObject] = useState({
        order: { highLow: 0, starDescending: false },
        range: [ 25, 40 ],
        page: 1
    })


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

    const devList = devs.map(({first_name, last_name, email, hourly_rate, star_rating}) =>
            <div key={uuidv4()} className='devCard'>
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
        <Filters
            handleSubmit={(filterData) => {
                setQueryObject({
                    ...queryObject,
                    order: filterData.order,
                    range: filterData.range,
                })
            }}
        />

            <div className="allDevsContainer">
                {devList}
            </div>

            <Pagination 
                totalPages={pageTotal}
                currentPage={queryObject.page}
                pageNumbers={pageNumbersDisplayed}
                onPageChange={(newPage) => {
                    setQueryObject({ ...queryObject, page: newPage })
                }}
                handleFivePageView={(pagesArray) => {
                    setPageNumbersDisplayed(pagesArray)
                }}
            />
    </>
    )
}

export default DevBox