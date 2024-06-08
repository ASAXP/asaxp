import { Story } from "@domain/story/entities/story";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const storyRowParser = (queryResult: any[]): Story[] | Error => {
  try {
    const result = queryResult.map((query) => {
      return {
        id: query.id,
        type: query.type,
        description: query.description,
        content: query?.content,
        point: query.point,
        assignee: query?.assignee,
      };
    });
    return result as Story[];
  } catch (e) {
    throw new Error("invalid type parsed");
  }
};

export { storyRowParser };
