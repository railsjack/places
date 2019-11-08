import React, { useState } from "react";
import { Button, View, Text, TextInput, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import Colors from "../constants/Colors";
import * as placesActions from "../store/actions/place_actions";
import ImagePicker from '../components/ImageSelector'

const NewPlaceScreen = props => {
  const [title, setTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const titleChangeHandler = text => {
    setTitle(text);
  };

  const dispatch = useDispatch();
  const saveHandler = () => {
    dispatch(placesActions.addPlace(title, selectedImage));
    props.navigation.goBack();
  };
  const imageTakenHandler = imagePath => {
    setSelectedImage(imagePath)
  };
  return (
    <View style={styles.form}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={titleChangeHandler}
        value={title}
      />
      <ImagePicker onImageTaken={imageTakenHandler} />
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
