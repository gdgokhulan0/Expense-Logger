import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function notificationPane() {
  return (
    <View style={styles.notificationPane}></View>
  );
}

const styles = StyleSheet.create({
  notificationPane:{
    paddingTop:50,
  },
});
