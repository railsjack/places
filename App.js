import React from "react";
import { useScreens } from "react-native-screens";
import PlacesNavigator from "./app/navigation/PlacesNavigator";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import reducer from "./app/store/reducers";
import * as DB from './app/helpers/db';

DB.init()
.then(()=>{
  console.log('Initialized database')
})
.catch(err=>{
  console.log('Initializing database failed')
  console.log(err)
})
const store = createStore(reducer, applyMiddleware(ReduxThunk));

useScreens();

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
