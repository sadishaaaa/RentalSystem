import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { message } from "antd";

import { Table, Button } from 'antd';
const ContactTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const contactColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {

      field: "customer_name",
      headerName: "customerName",
      width: 230,
      
    },
    {
        field: "contactNumber",
        headerName: "contactNo",
        width: 230,
      },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  


      {
        field: "message",
        headerName: "Message",
        width: 190,
       
      },
  ];
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/contact/getContact");
      const jsonData = await response.json();
  
      // Add an `id` property to each row using the `customer_id` value
      const modifiedData = jsonData.map((row) => ({
        ...row,
        id: row.contact_id,
      }));
  
      setData(modifiedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleDelete = async (contact_id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/contact/delContact/${contact_id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete data");
      }

      setData(data.filter((item) => item.contact_id !== contact_id));
      message.success("Contact deleted successfully");
    } catch (error) {
      console.error(error);
      message.error("Failed to delete contact");
    }
  };

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.contact_id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
    <Table dataSource={data} rowKey="id" pagination={{ pageSize: 9 }} rowSelection={{ type: 'checkbox' }}>
      {contactColumns.map((column) => (
        <Table.Column key={column.field} title={column.headerName} dataIndex={column.field} width={column.width} />
      ))}
      <Table.Column
        title="Action"
        key="action"
        width={200}
        render={(text, record) => (
          <Button className="deleteButton"  onClick={() => handleDelete(record.contact_id)}>
            Delete
          </Button>
        )}
      />
    </Table>
  </div>
  );
};

export default ContactTable;

      