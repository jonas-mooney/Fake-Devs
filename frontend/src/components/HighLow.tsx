import { FC, useEffect, useState } from 'react'
import '../App.scss'

interface FilterData {
  order: {
      highLow: number;
      starDescending: boolean;
  }
  range: number[]
}

interface HighLowProps {
  handleOrderChange: (arg: FilterData["order"]) => void;
}

const HighLow = ({handleOrderChange}: HighLowProps) => {
  const [isActive, setIsActive] = useState({
    highLow: 0,
    starDescending: false,
  })

  const handleClick = async (prop: number) => {
    
    switch(prop) {
      case 1:
        if (isActive.highLow === -1) {
          setIsActive((prevState) => ({ ...prevState, highLow: 1 }))
        }
        else {
          setIsActive((prevState) => ({ ...prevState, highLow: -1 }))
        }
        break;
      case 2:
        isActive.starDescending === false ? setIsActive((prevState) => ({ ...prevState, starDescending: true })) : setIsActive((prevState) => ({ ...prevState, starDescending: false }))
    }
    // else setIsActive(prop, () => handleOrderChange(isActive))
    // What could have been an alternative to useEffect, a callback function
    // on setIsActive, would wait until state is update before firing.
  }

  useEffect(() => {
    handleOrderChange(isActive)
  })

  return (
    <div className="highLow">
      {/* <button
        style={{
          backgroundColor: isActive.highLow == 1 ? 'salmon' : '',
          color: isActive.highLow == 1 ? 'white' : 'black',
        }}
        onClick={() => handleClick(1)}
      >$↑</button> */}

      <button
        style={{
          backgroundColor: isActive.highLow == 1 ? 'salmon' : '',
          color: isActive.highLow == 1 ? 'white' : 'black',
        }}
        onClick={() => handleClick(1)}
      >$↓</button>

      <button
        style={{
          backgroundColor: isActive.starDescending === true ? 'salmon' : '',
          color: isActive.starDescending === true ? 'white' : 'black',
        }}
        onClick={() => handleClick(2)}
      >⭐️</button>
    </div>
  )
}

export default HighLow