import { ADD_PLACE } from "../types";

export const addPlace = (title, image) => {
  return {
    type: ADD_PLACE,
    placeData: { title, image }
  };
};
