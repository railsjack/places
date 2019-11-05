import { ADD_PLACE } from "../types";

export const addPlace = title => {
  return {
    type: ADD_PLACE,
    placeData: { title }
  };
};
