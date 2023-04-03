import { FC, useEffect, useState } from 'react'
import '../App.scss'

interface HighLowProps {
  handleOrderChange: (arg: object) => void;
}

const HighLow = ({handleOrderChange}: HighLowProps) => {
  // const [isActive, setIsActive] = useState(0)
  const [isActive, setIsActive] = useState({
    highLow: 0,
    starDescending: false,
  })

  const handleClick = async (prop: number | boolean) => {
    
    switch(typeof prop) {
      case 'number':
        if (prop === isActive.highLow) {
          setIsActive((prevState) => ({ ...prevState, highLow: 0 }))
        }
        else {
          setIsActive((prevState) => ({ ...prevState, highLow: prop }))
        }
        break;
      case 'boolean':
        isActive.starDescending === false ? setIsActive((prevState) => ({ ...prevState, starDescending: true })) : setIsActive((prevState) => ({ ...prevState, starDescending: false }))
        // if (prop === isActive.starDescending) {
        //   setIsActive((prevState) => ({ ...prevState, starDescending: }))
        // }
    }


    // else setIsActive(prop, () => handleOrderChange(isActive))
    // What could have been an alternative to useEffect, a callback function
    // on setIsActive, would wait until state is update before firing.

    // else setIsActive(prop)
  }

  useEffect(() => {
    handleOrderChange(isActive)
  })

  return (
    <div className="highLow">
      <button
        style={{
          backgroundColor: isActive.highLow == 1 ? 'salmon' : '',
          color: isActive.highLow == 1 ? 'white' : 'black',
        }}
        onClick={() => handleClick(1)}
      >$↑</button>

      <button
        style={{
          backgroundColor: isActive.highLow == -1 ? 'salmon' : '',
          color: isActive.highLow == -1 ? 'white' : 'black',
        }}
        onClick={() => handleClick(-1)}
      >$↓</button>

      <button
        style={{
          backgroundColor: isActive.starDescending === true ? 'salmon' : '',
          color: isActive.starDescending === true ? 'white' : 'black',
        }}
        onClick={() => handleClick(true)}
      >⭐️</button>
    </div>
  )
}

export default HighLow