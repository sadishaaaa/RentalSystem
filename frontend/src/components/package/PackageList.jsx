
import Sidebar from "../../components/sidebar/Sidebar";
import PackageDatatable from "./PackageDatatable";

const PackageList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <PackageDatatable />
      </div>
    </div>
  );
};

export default PackageList;