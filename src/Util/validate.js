export const validate = (val) => {
  let errorTxt = "";
  if (val.length <= 5) {
    errorTxt = "minimmum letters is 6";
  } else {
    errorTxt = "It's okay";
  }
  return errorTxt;
};
