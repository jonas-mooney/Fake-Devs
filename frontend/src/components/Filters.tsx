import PriceRange from "./PriceRange"
import HighLow from "./HighLow"
import "../App.scss"
import { useState } from "react"
import axios from "axios"

interface FilterProps {
  handleSubmit: (args: object) => void;
}

const Filters = ({ handleSubmit }: FilterProps) => {
  const [range, setRange] = useState([25,75])
  const [order, setOrder] = useState({})

  const handleRangeChange = (props: Array<number>) => {
    setRange(props)
  }

  const handleOrderChange = (props: object) => {
    setOrder(props)
  }

  return (
    <div className="filterBox">
    <HighLow handleOrderChange={handleOrderChange} />
    <PriceRange handleRangeChange={handleRangeChange} range={range} />
    <button onClick={() => handleSubmit({order, range})}>Submit</button>
    {/* I initially tried pass the function as a prop but to get the return value of the function it must be invoked */}
    </div>
  )
}

export default Filters