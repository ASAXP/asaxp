// import db from "@database/database";
// import { RowDataPacket } from "mysql2";

// type QueryFunctionType<T extends RowDataPacket> = () => T;

// const transaction = async (queryFunction: QueryFunctionType<RowDataPacket>) => {
//   try {
//     db.beginTransaction();
//     const [result] = await queryFunction();
//     db.commit();
//     return result;
//   } catch (e) {
//     db.rollback();
//   }
// };

// export default transaction;
