import React from "react";
import { useScreens } from "react-native-screens";
import PlacesNavigator from "./app/navigation/PlacesNavigator";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import reducer from "./app/store/reducers";

const store = createStore(reducer, applyMiddleware(ReduxThunk));

useScreens();

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
