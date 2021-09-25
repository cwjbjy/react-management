import { SETFILENAME } from "../action-types";

const fileName = (state = "", action) => {
  switch (action.type) {
    case SETFILENAME:
      return action.value;
    default:
      return state;
  }
};

export default fileName;
