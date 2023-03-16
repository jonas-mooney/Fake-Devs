import PriceRange from "./PriceRange"
import HighLow from "./HighLow"
import "../App.scss"
import { useState } from "react"
import axios from "axios"

interface FilterProps {
  handleSubmit: (props: any) => void;
}

const Filters: React.FC<FilterProps> = ({handleSubmit}) => {
  const [range, setRange] = useState([25,75])

  const handleRangeChange = (props: any) => {
    setRange(props)
  }

  let filterData = {
    range: range,
  }

  // const filterSubmit = () => {
  //   axios.get()
  // }

  return (
    <div className="filterBox">
    <HighLow />
    <PriceRange handleRangeChange={handleRangeChange} range={range} />
    <button onClick={() => handleSubmit(range)}>Submit</button>
    {/* I initially tried pass the function as a prop but to get the return value of the function it must be invoked */}
    </div>
  )
}

export default Filters