const isNumeric = (str: string) => {
  if (str.trim() === "") {
    return false;
  }
  return !isNaN(Number(str));
};

export { isNumeric };
