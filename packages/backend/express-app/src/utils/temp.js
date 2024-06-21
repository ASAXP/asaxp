const queryTextBuilder = (item) => {
  let questionMarks = "";
  let updateMatchingPair = "";
  const result = Object.entries(item).reduce(
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

console.log(queryTextBuilder({ key1: "test1", key2: "test2" }));

// const result = queryTextBuilder({ key1: "test1", key2: "test2" });

// console.log(
//   `insert into stories (${result.keys.join(",")}) values (${result.questionMarkString}) `,
// );
