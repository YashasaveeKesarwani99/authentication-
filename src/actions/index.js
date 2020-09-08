export const autoInputChange = ({ field, value }) => {
  return {
    type: "AUTH_INPUT_CHANGE",
    payload: { field, value }
  };
};
