import * as Slider from '@radix-ui/react-slider'
import { useState } from 'react'

const PriceRange = ({handleRangeChange, range}) => {

  // const [value, setValue] = useState([25, 75])

  return (
    <form className="sliderBox">
      <h3>{`$${range[0]} - $${range[1]}`}</h3>
      <Slider.Root className="SliderRoot" onValueChange={values => handleRangeChange(values)} defaultValue={[25, 75]} max={100} step={5} minStepsBetweenThumbs={1} aria-label="Volume">
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