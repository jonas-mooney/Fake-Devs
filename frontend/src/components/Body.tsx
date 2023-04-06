import DevBox from "./DevBox"
import Filters from "./Filters"
import '../App.scss'

interface HandleLoadingFunc {
  handleLoading: (arg: boolean) => void;
}

const Body = (prop: HandleLoadingFunc) => {
  
  return (
    <div className="body-content">
      <DevBox handleLoading={prop.handleLoading} />
    </div>
  )
}

export default Body