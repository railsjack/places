import React, { useState, useCallback } from "react";
import {
  Button,
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet
} from "react-native";
import { useDispatch } from "react-redux";
import Colors from "../constants/Colors";
import * as placesActions from "../store/actions/place_actions";
import ImagePicker from "../components/ImageSelector";
import LocationPicker from "../components/LocationPicker";

const NewPlaceScreen = props => {
  const [title, setTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [selectedLocation, setSelectedLocation] = useState();
  const titleChangeHandler = text => {
    setTitle(text);
  };

  const dispatch = useDispatch();
  const saveHandler = () => {
    dispatch(placesActions.addPlace(title, selectedImage, selectedLocation));
    props.navigation.goBack();
  };
  const imageTakenHandler = imagePath => {
    setSelectedImage(imagePath);
  };
  const locationPickedHandler = useCallback(location => {
    setSelectedLocation(location);
  }, [])
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={title}
        />
        <ImagePicker onImageTaken={imageTakenHandler} />
        <LocationPicker onLocationPicked={locationPickedHandler} navigation={props.navigation} />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={saveHandler}
        />
      </View>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = navData => {
  return {
    headerTitle: "Add Place"
  };
};
const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
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
