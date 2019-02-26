import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ListItem from "../Listitem/ListemItem";

const PlaceList = props => {
  const PlacesOutput = props.places.map((place, i) => (
    <ListItem
      key={i}
      placeName={place}
      onItemPressed={() => props.onPlaceDeleteHandler(i)}
    />
  ));
  return <ScrollView style={styles.listContainer}>{PlacesOutput}</ScrollView>;
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    marginBottom: 5
  }
});

export default PlaceList;
