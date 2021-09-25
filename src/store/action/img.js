import { SETFILENAME } from "../action-types";

export const SET_FILENAME = (value) => {
  return {
    type: SETFILENAME,
    value,
  };
};
