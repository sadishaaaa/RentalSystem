import { db } from "../connect.js";

export const createRent = (req, res) => {
  const insertQuery =
    "INSERT INTO rent (fullName, phoneNumber, emailAddress, address,  shippingOption, total, proofOfPayment, itemName) VALUES ( ?,?, ?, ?, ?, ?, ?,?)";
  
  const {
    fullName,
    phoneNumber,
    emailAddress,
    address,
    shippingOption,
    total,
    proofOfPayment,
    itemName
  } = req.body;

  db.query(
    insertQuery,
    [fullName, phoneNumber, emailAddress, address, shippingOption, total, proofOfPayment,itemName],
    (err, data) => {
      if (err) {
        return res.status(500).json({ error: "An error occurred while processing the request." });
      }
      return res.status(200).json({ message: "Order placed successfully." });
    }
  );
};
export const getRent = (req, res) => {
  const query = 'SELECT * FROM rent';

  db.query(query, (err, results, fields) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving users from database');
    } else {
      res.json(results);
    }
  });
}
export const delRent =(req,res) =>{
  const Order_id = req.params.Order_id
  const deleteQuery = "DELETE FROM rent WHERE Order_id = ?";
  db.query(deleteQuery, [Order_id], (error, result) => {
    if (error) {
      console.error("Error deleting contact:", error);
      return res.status(500).json({ error: "Server error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.json({ message: "Contact deleted successfully" });
  });
}