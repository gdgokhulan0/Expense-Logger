import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline } from 'react-native-paper';

export default function HeadLine() {
  return (
    <View style={styles.headLineView}>
        <Headline style={styles.headLineText}>Expense Logger</Headline>
    </View>

  );
}

const styles = StyleSheet.create({
  headLineText:{
    color:'#fff',
    fontSize: 30
  },
  headLineView:{
    color:'#fff',
    flex : 6
  }
});
