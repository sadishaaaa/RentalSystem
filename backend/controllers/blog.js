import { db } from "../connect.js";
export const blog = (req, res) => {
    const insertQuery =
    "INSERT INTO blog ( blogTitle, blogDesc, blogPicture) VALUES ( ?, ?, ?)";
  db.query(
    insertQuery,
    [ req.body.blogTitle, req.body.blogDesc ,req.body.blogPicture],
    (err, data) => {
      if (err) return res.status(600).json(err);
      return res.status(300).json("Blog is uploaded sucessfully.");
    }
  );
}
export const getBlog = (req, res) => {
    const query = 'SELECT * FROM blog';
  
    db.query(query, (err, results, fields) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error retrieving users from database');
      } else {
        res.json(results);
      }
    });
  }

  export const delBlog =(req,res) =>{
    const blogId= req.params.blogId
    const deleteQuery = "DELETE FROM blog WHERE blogId= ?";
    db.query(deleteQuery, [blogId], (error, result) => {
      if (error) {
        console.error("Error deleting contact:", error);
        return res.status(500).json({ error: "Server error" });
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Contact not found" });
      }
  
      res.json({ message: "Blog  deleted successfully" });
    });
  }