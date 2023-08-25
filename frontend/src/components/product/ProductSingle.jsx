
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/Chart";
import ProductList from "./ProductList";


const ProductSingle = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        {/* <Navbar /> */}
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Product Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Product Name</h1>
                <div className="detailItem">
                  <span className="itemKey">Category:</span>
                  <span className="itemValue">Category Name</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <span className="itemValue">Product Description</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Price:</span>
                  <span className="itemValue">$10</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Quantity:</span>
                  <span className="itemValue">50</span>
</div>
<div className="detailItem">
<span className="itemKey">Status:</span>
<span className="itemValue">In Stock</span>
</div>
</div>
</div>
</div>
<div className="right">
{/* <div className="rightTop">
<Chart />
</div> */}
{/* <div className="rightBottom">
<ProductList />
</div> */}
</div>
</div>
<div className="bottom">
<h1>Product Description</h1>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor
ipsum vitae quam fringilla, id blandit leo fermentum. Maecenas
pulvinar quam eu ante commodo, et facilisis dolor viverra. Donec
maximus velit nunc, id aliquam elit efficitur ut. Donec ut luctus
arcu. Vestibulum ut eleifend massa. Aenean tincidunt faucibus enim,
eu hendrerit nulla tincidunt non. Nulla porttitor velit purus, eget
tempor dui dignissim vel. Ut eu nulla lectus. Duis laoreet, leo eget
porttitor bibendum, turpis odio bibendum tellus, ut euismod tellus
neque sed nisi. Sed ac nibh vel velit dictum tempus. Etiam varius
volutpat quam eu commodo. Nullam ut eros sit amet nisl rutrum
venenatis.
</p>
</div>
</div>
</div>
);
};

export default ProductSingle;
