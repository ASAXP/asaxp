import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "ls-20fdba53e4f887f2494ee5a00924534e10bcd0a4.cslpz2qipalq.ap-northeast-2.rds.amazonaws.com",
    user: "dbmasteruser",
    password: "05H~+aJRaKtXVs=dZ0``a<H~kg)Bhel%",
    database: "xp-app",
  })
  .promise();

export default pool;
