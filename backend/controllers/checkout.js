import { db } from "../connect.js";

export const checkout = (req, res) => {
  const insertQuery =
    "INSERT INTO checkout (fullName, phoneNumber, emailAddress, address,  shippingOption, total) VALUES ( ?, ?, ?, ?, ?, ?)";
  
  const {
    fullName,
    phoneNumber,
    emailAddress,
    address,
   
    shippingOption,
    total
  } = req.body;

  db.query(
    insertQuery,
    [fullName, phoneNumber, emailAddress, address, shippingOption, total],
    (err, data) => {
      if (err) {
        return res.status(500).json({ error: "An error occurred while processing the request." });
      }
      return res.status(200).json({ message: "Order placed successfully." });
    }
  );
};
