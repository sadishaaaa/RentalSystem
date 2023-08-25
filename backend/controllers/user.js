import { db } from "../connect.js";
export const getUser = (req, res) => {
    const query = 'SELECT * FROM customers';

    db.query(query, (err, results, fields) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error retrieving users from database');
      } else {
        res.json(results);
      }
    });
}
export const delUser =(req,res) =>{
      const customer_id = req.params.customer_id
      const deleteQuery = "DELETE FROM customers WHERE customer_id = ?";
      db.query(deleteQuery, [customer_id], (error, result) => {
        if (error) {
          console.error("Error deleting User:", error);
          return res.status(500).json({ error: "Server error" });
        }
    
        if (result.affectedRows === 0) {
          return res.status(404).json({ error: "User not found" });
        }
    
        res.json({ message: "User deleted successfully" });
      });
    }


      
    
