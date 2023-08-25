import React from 'react'
import Sidebar from "../sidebar/Sidebar"
import ContactTable from './contactTable'
 const ContactList = () => {
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
  
      <ContactTable/>
    </div>
  </div>
  )
}
export default ContactList