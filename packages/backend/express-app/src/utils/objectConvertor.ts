export type QueryObjectType = {
  columns: string[];
  values: string[];
  questionMarkString?: string;
  updateMatchingPair?: string;
};

const queryTextBuilder = (item: Record<string, string | number>) => {
  let questionMarks = "";
  let updateMatchingPair = "";
  const result = Object.entries(item).reduce<QueryObjectType>(
    (acc, [key, value]) => {
      acc.columns.push(key);
      acc.values.push("" + value);
      questionMarks += questionMarks.length > 0 ? ", ?" : "?";
      updateMatchingPair +=
        updateMatchingPair.length > 0 ? ", " + key + " = ?" : key + " = ?";
      return acc;
    },
    {
      columns: [],
      values: [],
    },
  );
  result.questionMarkString = questionMarks;
  result.updateMatchingPair = updateMatchingPair;
  return result;
};

export { queryTextBuilder };
