export type QueryObjectType = {
  fields: string[];
  values: string[];
  questionMarkString?: string;
  matchingPair?: string;
};

const queryTextBuilder = (item: Record<string, string | number>) => {
  let questionMarks = "";
  let updateMatchingPair = "";
  const result = Object.entries(item).reduce<QueryObjectType>(
    (acc, [key, value]) => {
      acc.fields.push(key);
      acc.values.push("" + value);
      questionMarks += questionMarks.length > 0 ? ", ?" : "?";
      updateMatchingPair +=
        updateMatchingPair.length > 0 ? ", " + key + " = ?" : key + " = ?";
      return acc;
    },
    {
      fields: [],
      values: [],
    },
  );
  result.questionMarkString = questionMarks;
  result.matchingPair = updateMatchingPair;
  return result;
};

export { queryTextBuilder };
