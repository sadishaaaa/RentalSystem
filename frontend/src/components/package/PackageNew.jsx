import Navbar from "../../components/navbar/Navbar";

const PackageNew = () => {
return (
<div className="new">
<Navbar />
<div className="newContainer">
<h1 className="title">New Package</h1>
<form className="newForm">
<div className="newItem">
<label>Name</label>
<input type="text" placeholder="Package Name" />
</div>
<div className="newItem">
<label>Description</label>
<input type="text" placeholder="Package Description" />
</div>
<div className="newItem">
<label>Price</label>
<input type="number" placeholder="$" />
</div>
<div className="newItem">
<label>Status</label>
<select className="newSelect" name="active" id="active">
<option value="yes">Available</option>
<option value="no">Unavailable</option>
</select>
</div>
<button className="newButton">Create</button>
</form>
</div>
</div>
);
};

export default PackageNew;