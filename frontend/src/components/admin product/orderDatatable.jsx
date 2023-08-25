
// import { DataGrid } from "@mui/x-data-grid";
// import { orderColumns } from "../../ordersource";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// const orderDatatable = () => {
//   // const [data, setData] = useState(userRows);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             <div
//               className="deleteButton"
//               onClick={() => handleDelete(params.row.id)}
//             >
//               Delete
//             </div>
//           </div>
//         );
//       },
//     },
//   ];
//   return (
//     <div className="datatable">
//       {/* <div className="datatableTitle">
//         Add New User
//         <Link to="/users/new" className="link">
//           Add New
//         </Link>
//       </div> */}
//       <DataGrid
//         className="datagrid"
//         rows={data}
//         columns={orderColumns.concat(actionColumn)}
//         pageSize={9}
//         rowsPerPageOptions={[9]}
//         checkboxSelection
//       />
//     </div>
//   );
// };

// export default orderDatatable;
