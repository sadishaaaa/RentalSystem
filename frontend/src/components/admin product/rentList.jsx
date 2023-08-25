import "../list/list.scss"
import Sidebar from "../sidebar/Sidebar"
import OrderTable from "./OrderTable"

const RentList = () => {
  return (
  
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
    
        <OrderTable/>
      </div>
    </div>
  )
}

export default RentList