import mysql from "mysql2"

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test123',
    database: 'bhadakuda'
  });