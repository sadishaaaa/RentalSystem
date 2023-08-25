import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { message,Table,Button} from "antd";
import "./datatable.scss";

const Datatable = ({onUserCountChange}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

 
  const userColumns = [
    { field: "customer_id", headerName: "ID", width: 70 },
    {
      field: "customerName",
      headerName: "customerName",
      width: 230,
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },

    {
      field: "contact_no",
      headerName: "Contact",
      width: 100,
    },
    {
      field: "address",
      headerName: "Address",
      width: 190,
    },
  ];
  const handleDeleteUser = async (customer_id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/user/delUser/${customer_id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete data");
      }

      setData(data.filter((item) => item.customer_id !== customer_id));
      message.success("User deleted successfully");
    } catch (error) {
      console.error(error);
      message.error("Failed to delete User");
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/user/getUser");
      const jsonData = await response.json();

      // Add an `id` property to each row using the `customer_id` value
      const modifiedData = jsonData.map((row) => ({
        ...row,
        id: row.customer_id,
      }));

      setData(modifiedData);
      if (onUserCountChange) {
        onUserCountChange(modifiedData.length);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
              onClick={() => handleDeleteUser(params.row.customer_id)}
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
      {userColumns.map((column) => (
        <Table.Column key={column.field} title={column.headerName} dataIndex={column.field} width={column.width} />
      ))}
      <Table.Column
        title="Action"
        key="action"
        width={200}
        render={(text, record) => (
          <Button className="deleteButton"  onClick={() => handleDeleteUser(record.customer_id)}>
            Delete
          </Button>
        )}
        />
        </Table>
      </div>
   
  );
};

export default Datatable;
