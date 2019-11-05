import React, { useState } from "react";
import { Button, View, Text, TextInput, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import Colors from "../constants/Colors";
import * as placesActions from "../store/actions/place_actions";

const NewPlaceScreen = props => {
  const [title, setTitle] = useState("");
  const titleChangeHandler = text => {
    setTitle(text);
  };

  const dispatch = useDispatch();
  const saveHandler = () => {
    dispatch(placesActions.addPlace(title));
    props.navigation.goBack();
  };
  return (
    <View style={styles.form}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={titleChangeHandler}
        value={title}
      />
      <Button title="Save Place" color={Colors.primary} onPress={saveHandler} />
    </View>
  );
};

NewPlaceScreen.navigationOptions = navData => {
  return {
    headerTitle: "Add Place"
  };
};
const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 15
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2
  }
});
export default NewPlaceScreen;
