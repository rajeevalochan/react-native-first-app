import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/Placelist";

export default class App extends React.Component {
  state = {
    places: []
  };
  placeButtonHadler = placeName => {
    if (placeName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };
  onPlaceDeleteHandler = placeId => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => placeId !== i)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeButtonHadler} />
        <PlaceList
          places={this.state.places}
          onPlaceDeleteHandler={this.onPlaceDeleteHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
