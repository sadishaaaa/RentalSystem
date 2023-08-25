import Navbar from "../../components/navbar/Navbar";

const PackageEdit = () => {
return (
<div className="edit">
<Navbar />
<div className="editContainer">
<h1 className="title">Edit Package</h1>
<form className="editForm">
<div className="editItem">
<label>Name</label>
<input type="text" placeholder="Package Name" value="Package Name" />
</div>
<div className="editItem">
<label>Description</label>
<input
           type="text"
           placeholder="Package Description"
           value="Package Description"
         />
</div>
<div className="editItem">
<label>Price</label>
<input type="number" placeholder="$" value="75" />
</div>
<div className="editItem">
<label>Status</label>
<select className="editSelect" name="active" id="active" value="yes">
<option value="yes">Available</option>
<option value="no">Unavailable</option>
</select>
</div>
<button className="editButton">Update</button>
</form>
</div>
</div>
);
};

export default PackageEdit;