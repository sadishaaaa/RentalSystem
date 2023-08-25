import { db } from "../connect.js";
export const contact = (req, res) => {
    const insertQuery =
    "INSERT INTO contact (customer_id, customer_name, email, contactNumber, message) VALUES (?,?, ?, ?, ?)";
  db.query(
    insertQuery,
    [req.body.customer_id,req.body.customer_name, req.body.email, req.body.contactNumber, req.body.message],
    (err, data) => {
      if (err) return res.status(600).json(err);
      return res.status(300).json("Your message is successfully sent, we will get through it soon.");
    }
  );
}
export const getContact = (req, res) => {
  const query = 'SELECT * FROM contact';

  db.query(query, (err, results, fields) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving users from database');
    } else {
      res.json(results);
    }
  });
}
export const delContact =(req,res) =>{
  const contact_id = req.params.contact_id
  const deleteQuery = "DELETE FROM contact WHERE contact_id = ?";
  db.query(deleteQuery, [contact_id], (error, result) => {
    if (error) {
      console.error("Error deleting contact:", error);
      return res.status(500).json({ error: "Server error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.json({ message: "Order deleted successfully" });
  });
}