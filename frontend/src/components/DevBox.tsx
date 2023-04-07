import React, {useState, useEffect} from "react"
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import '../App.scss'

import Filters from "./Filters"

interface HandleLoadingFunc {
    handleLoading: (arg: boolean) => void;
  }

const DevBox = (prop: HandleLoadingFunc) => {
  const [devs, setDevs] = useState([])
  const [query, setQuery] = useState([])
  const [pageTotal, setPageTotal] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)

  const pages = new Array(pageTotal).fill(null).map((v, i) => i)
    
    useEffect( () => {
        prop.handleLoading(true)
        async function fetchData() {
            try {
                const res = await axios.get('http://localhost:5444/');
                setDevs(res.data.devs);
                setPageTotal(res.data.totalPages)
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
        prop.handleLoading(false)
    }, []);

    // The second argument of useEffect function is referred to as the “dependency array”. When the variable included inside the array didn’t change, the function passed as the first argument won’t be executed.
    // The empty array indicates that the effect doesn’t have any dependencies to watch for change, and without a trigger, it won’t be run after the component is mounted.
    // You can also add a return statement to useEffect that will fire on unmount
    // see https://sebhastian.com/react-usestate-useeffect-hooks/

    const handleSubmit = (filterData: object) => {
        console.log(filterData)
        
        async function fetchData() {
            try {
                axios.post(`http://localhost:5444/filter?page=${pageNumber}`, filterData).then((res) => {
                    setPageTotal(res.data.totalPages)
                    setDevs(res.data.devs)
                })

            } catch (err) { 
                console.log(err);
            }
        };
        fetchData();
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
        {pages.map((pageIndex) => (
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

