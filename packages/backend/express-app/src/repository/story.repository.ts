import db from "@database/database";
import OutCome from "@utils/outcomeType";
import { parseStory, Story } from "@libs/types";
import { storyRowParser } from "@routes/storyRowParser";

// Promise<OutCome<Story[]>>
// async function getAllStories(): Promise<OutCome<Story[]>> {
//   try {
//     const queryText =
//       "SELECT `id`,  `parent_id`,  `type`,  `description`, LEFT(`content`, 256) as content,  `assignee_id`, `point`, `created_at`, `updated_at` FROM `stories` LIMIT 1000";
//     const [queryResult] = await db.query(queryText);
//     const result = storyRowParser(queryResult as unknown[]);
//     return {
//       outcome: true,
//       // payload: result,
//     };
//   } catch (e) {
//     return {
//       outcome: false,
//       payload: e as Error,
//     };
//   }
// }
// // const getAllStories<T> = async () => {
// //   try {
// //     const queryText =
// //       "SELECT `id`,  `parent_id`,  `type`,  `description`, LEFT(`content`, 256),  `assignee_id`, `point`, `created_at`, `updated_at` FROM `stories` LIMIT 1000";
// //     const result = await db.query(queryText);
// //     return {
// //       outcome: true,
// //       payload: result[0]
// //     };
// //   } catch (e: unknown) {
// //     return {
// //       outcome: false,
// //       payload: ;
// //     }
// //   }
// // };

// const storyRepository = {
//   getAllStories,
// };

// export default storyRepository;
