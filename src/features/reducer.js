import * as types from "./action";

const initalState = {
  images: "null",
};
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case types.AddImage:
      return {
        images: action.payload,
      };
    case types.resetImage:
      return {
        images: "null",
      };
  }
  return state;
};

export default reducer;