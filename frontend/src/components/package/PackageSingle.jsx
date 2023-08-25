
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/Chart";
import PackageList from "./PackageList";

const PackageSingle = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Package Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Package Name</h1>
                <div className="detailItem">
                  <span className="itemKey">Items:</span>
                  <div className="itemValue">
                    <ul>
                      <li>
                        Item 1 - Quantity: 5 - Price: $10
                      </li>
                      <li>
                        Item 2 - Quantity: 3 - Price: $15
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <span className="itemValue">Package Description</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Price:</span>
                  <span className="itemValue">$75</span>
                </div>
                <div className="detailItem">
                </div>
                <div className="detailItem">
                  <span className="itemKey">Status:</span>
                  <span className="itemValue">Available</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart />
          </div>
        </div>
        <div className="bottom">
          <h2 className="title">Package History</h2>
          <div className="historyItem">
            <div className="historyTitle">Package Created</div>
            <div className="historyDate">April 10 2023</div>
          </div>
          <div className="historyItem">
            <div className="historyTitle">Package Updated</div>
            <div className="historyDate">April 13 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PackageSingle;