import { ADD_PLACE } from "../types";

import Place from "../../models/place";

const initialState = {
  places: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(new Date().toString(), action.placeData.title);
      console.log('placeReducer state', state)
      return {
        places: state.places.concat(newPlace)
      };
  }
  return state;
};
