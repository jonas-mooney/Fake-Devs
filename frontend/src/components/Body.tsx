import DevBox from "./DevBox"
import HomePage from "./HomePage";
import Filters from "./Filters"
import '../App.scss'

interface HandleLoadingFunc {
  handleLoading: (arg: boolean) => void;
}

const Body = (prop: HandleLoadingFunc) => {
  
  return (
    <div className="body-content">
      <HomePage />
      <DevBox handleLoading={prop.handleLoading} />
    </div>
  )
}

export default Body