import Sidebar from "../../components/sidebar/Sidebar";
import { useState,useEffect } from "react";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Datatable from "../../components/datatable/Datatable"; 
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  const [userCount, setUserCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  
  useEffect(() => {
    async function fetchUserCount() {
      try {
        const response = await fetch('http://localhost:5000/api/user/getUser'); // Replace with your API endpoint
        const data = await response.json();
        setUserCount(data.length); // Assuming the response is an array of users
      } catch (error) {
        console.error('Error fetching user count:', error);
      }
    }

    fetchUserCount();
  }, []);

  useEffect(() => {
    async function fetchOrderCount() {
      try {
        const response = await fetch('http://localhost:5000/api/rent/getRent'); // Replace with your API endpoint
        const data = await response.json();
        setOrderCount(data.length); // Assuming the response is an array of users
      } catch (error) {
        console.error('Error fetching user Order:', error);
      }
    }

    fetchOrderCount();
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        
        <div className="widgets">
          <Widget type="user" count ={userCount}/>
          
          <Widget type="order" count={orderCount}/>
        
        </div>
        <div className="charts">
          {/* <Featured /> */}
          <Chart title="Last 6 Months (Revenue)" aspect={4 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">User Data</div>
          <Datatable />
        </div>
      
        {/* <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
