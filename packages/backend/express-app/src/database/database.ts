import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: process.env.DATABASE_URL || "127.0.0.1",
    user: "root",
    password: "",
    database: "notes_app",
  })
  .promise();

// async function getNots() {
//   const [rows] = await pool.query("select * from notes");
//   return rows;
// }
