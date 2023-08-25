import { db } from "../connect.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const register = (req, res) => {
  //checking if customer to be registered already exists or not
  const selectQuery = "SELECT * FROM customers WHERE email = ?";
  db.query(selectQuery, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists");
  });



  //creating a user
  //hashing the password
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  const insertQuery =
    "INSERT INTO customers (customerName, email, contact_no, address, password) VALUES (?, ?, ?, ?, ? )";
  db.query(
    insertQuery,
    [req.body.customerName, req.body.email, req.body.contact_no, req.body.address, hashedPassword],
    (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User created successfully");
    }
  );
};

export const login = (req, res) => {
    const selectQuery = "SELECT * FROM customers WHERE email = ?"
    db.query(
        selectQuery,
        [req.body.email],
        (err,data) => {
            if (err)
             return res.status(500).json(err);

            if(data.length ===0)
             return res.status(404).json("User not found");

            const checkPassword = bcrypt.compareSync(
                req.body.password,
                 data[0].password)

            if (!checkPassword)
                return res.status(400).json("Email or password is wrong!!");

            const token = jwt.sign({id: data[0].id}, "secretkey");

            const{password, ...others} = data[0];

            res.cookie("accessToken", token, {
                httpOnly: true,
            }).status(200).json(others);
        }
    );
}

export const logout = (req, res) => {
    res.clearCookie("accessToken",{
        secure:true,
        sameSite:"none"
    }).status(200).json("User has been logged out")
}