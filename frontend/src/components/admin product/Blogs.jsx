import "../list/list.scss"
import Sidebar from "../sidebar/Sidebar"
import BlogTable from "./blogTable"
import "./blogTable.css"

const Blogs = () => {
  return (
  
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
    
        <BlogTable/>
      </div>
    </div>
  )
}

export default Blogs