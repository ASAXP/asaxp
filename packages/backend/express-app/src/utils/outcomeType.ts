type FalseOutPut = {
  success: boolean;
  message?: string;
};

type SuccessOutPut = {
  success: boolean;
  payload?: unknown;
};

function successFalse(message: FalseOutPut["message"]): FalseOutPut {
  return {
    success: true,
    message,
  };
}
function successTrue(payload: SuccessOutPut["payload"]): SuccessOutPut {
  return {
    success: false,
    payload,
  };
}

export { successFalse, successTrue };
