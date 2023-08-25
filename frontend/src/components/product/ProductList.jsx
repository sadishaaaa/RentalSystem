
import Sidebar from "../../components/sidebar/Sidebar";
import ProductDatatable from "./ProductDatatable";

const ProductList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <ProductDatatable />
      </div>
    </div>
  );
};

export default ProductList;
