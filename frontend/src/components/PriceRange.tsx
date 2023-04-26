import * as Slider from '@radix-ui/react-slider'
import { useState } from 'react'

interface HighLowProps {
  handleRangeChange: (arg: number[]) => void;
}

const PriceRange = (props: HighLowProps) => {
  const [value, setValue] = useState([25, 75])

  const handleValueChange = (values: number[]) => {
    setValue(values)
    props.handleRangeChange(values)
  }

  return (
    <form className="sliderBox">
      <h3>{`$${value[0]} - $${value[1]}`}</h3>
      <Slider.Root className="SliderRoot" onValueChange={handleValueChange} defaultValue={[25, 75]} max={100} step={5} minStepsBetweenThumbs={1} aria-label="Volume">
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" />
        <Slider.Thumb className="SliderThumb" />
      </Slider.Root>
    </form>
  )
}

export default PriceRange


// This file only runs alongside ts because alllowJS is set to true in tsconfig
// old news