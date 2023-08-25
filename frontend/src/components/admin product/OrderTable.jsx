import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import {  message } from "antd";

import { Table, Button } from 'antd';
const OrderTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const orderColumns = [
    { field: "Order_id", headerName: "ID", width: 70 },
    {

      field: "fullName",
      headerName: "customerName",
      width: 230,
      
    },
    {
        field: "phoneNumber",
        headerName: "contactNo",
        width: 230,
      },
    {
      field: "emailAddress",
      headerName: "Email",
      width: 230,
    },
  
   
    {
      field: "address",
      headerName: "Address",
      width: 190,
     
    },
    {
        field: "shippingOption",
        headerName: "Shipping Option",
        width: 190,
       
      },
      {
        field: "total",
        headerName: "Total Amount",
        width: 190,
       
      },

      {
        field: "itemName",
        headerName: "Rented Item",
        width: 190,
       
      },
  ];

  const handleDeleteOrder = async (Order_id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/rent/delRent/${Order_id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete data");
      }

      setData(data.filter((item) => item.Order_id !== Order_id));
      message.success("Order deleted successfully");
    } catch (error) {
      console.error(error);
      message.error("Failed to delete order");
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/rent/getRent");
      const jsonData = await response.json();
  
      // Add an `id` property to each row using the `customer_id` value
      const modifiedData = jsonData.map((row) => ({
        ...row,
        id: row.order_id,
      }));
  
      setData(modifiedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      // renderCell: (params) => {
      //   return (
      //     <div className="cellAction">
      //       <div
      //         className="deleteButton"
      //         onClick={() => handleDelete(params.row.id)}
      //       >
      //         Delete
      //       </div>
      //     </div>
      //   );
      // },
    },
  ];

  return (
    <div className="datatable">
    <Table dataSource={data} rowKey="id" pagination={{ pageSize: 9 }} rowSelection={{ type: 'checkbox' }}>
      {orderColumns.map((column) => (
        <Table.Column key={column.field} title={column.headerName} dataIndex={column.field} width={column.width} />
      ))}
      <Table.Column
        title="Action"
        key="action"
        width={200}
        render={(text, record) => (
          <Button className="deleteButton"  onClick={() => handleDeleteOrder(record.Order_id)}>
          Delete
        </Button>
        )}
      />
    </Table>
  </div>
  );
};

export default OrderTable;
