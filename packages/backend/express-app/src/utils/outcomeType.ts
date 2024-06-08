type OutCome<T> = {
  outcome: boolean;
  payload: T | Error;
};

export default OutCome;
