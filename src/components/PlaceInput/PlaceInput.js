import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class PlaceInput extends React.Component {
  state = {
    placeName: ""
  };
  placeButtonHadler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.props.onPlaceAdded(this.state.placeName);
  };
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          onChangeText={placeName => this.setState({ placeName })}
          value={this.state.placeName}
        />
        <Button
          onPress={this.placeButtonHadler}
          title="Add"
          style={styles.placeButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    //flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default PlaceInput;
