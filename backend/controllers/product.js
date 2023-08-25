import { db } from "../connect.js";
export const product = (req, res) => {
    const insertQuery =
    "INSERT INTO product ( product_name, product_type,actual_price,rental_price,cover) VALUES (?, ?, ?,?,?)";
  db.query(
    insertQuery,
    [req.body.product_name,req.body.product_type, req.body.actual_price, req.body.rental_price, req.body.cover],
    (err, data) => {
      if (err) return res.status(600).json(err);
      return res.status(300).json("The product is posted .");
    }
  );
}
export const getProduct = (req, res) => {
  const query = 'SELECT * FROM product';

  db.query(query, (err, results, fields) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving Products from database');
    } else {
      res.json(results);
    }
  });
}

export const delProduct =(req,res) =>{
  const product_id = req.params.product_id
  const deleteQuery = "DELETE FROM product WHERE product_id = ?";
  db.query(deleteQuery, [product_id], (error, result) => {
    if (error) {
      console.error("Error deleting Product:", error);
      return res.status(500).json({ error: "Server error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  });
}