import { FC, useState } from 'react'
import '../App.scss'

interface HighLowProps {
  handleOrderChange: (arg: number) => void;
}

const HighLow = ({handleOrderChange}: HighLowProps) => {
  const [isActive, setIsActive] = useState(0)

  const handleClick = (prop: number) => {
    if (prop == isActive) setIsActive(0)
    else setIsActive(prop)
    handleOrderChange(isActive)
  }

  return (
    <div className="highLow">
      <button
        style={{
          backgroundColor: isActive == 1 ? 'salmon' : '',
          color: isActive == 1 ? 'white' : 'black',
        }}
        onClick={() => handleClick(1)}
      >$↑</button>

      <button
        style={{
          backgroundColor: isActive == 2 ? 'salmon' : '',
          color: isActive == 2 ? 'white' : 'black',
        }}
        onClick={() => handleClick(2)}
      >$↓</button>

      <button
        style={{
          backgroundColor: isActive == 3 ? 'salmon' : '',
          color: isActive == 3 ? 'white' : 'black',
        }}
        onClick={() => handleClick(3)}
      >⭐️</button>
    </div>
  )
}

export default HighLow