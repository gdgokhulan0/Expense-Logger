import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button} from 'react-native-paper';
import * as firebase from 'firebase';


export default function Home({navigation}) {
  const[ini, setIni] = useState(false)
  const firebaseConfig = {
    apiKey: "AIzaSyDsnY8_Vpt2kFPiB53OQdjAojaffzwsdks",
    authDomain: "expense-manager-6ed78.firebaseapp.com",
    databaseURL: "https://expense-manager-6ed78.firebaseio.com",
    projectId: "expense-manager-6ed78",
    storageBucket: "expense-manager-6ed78.appspot.com",
    messagingSenderId: "208186868027",
    appId: "1:208186868027:web:d5ae5617b695db450f771e",
    measurementId: "G-EC6YK722H2"
  }
  useEffect(
    ()=>{
      if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig) };
    }
  ,[])
  return (
    <View style={styles.container}>
      <View style= {styles.creditButtonView}>
        <Button color = '#002147' style={styles.creditButton} mode='contained'  onPress = {()=>{navigation.navigate("Log a Credit")}}>Log a Credit</Button>
      </View>
      <View  style= {styles.debitButtonView}>
        <Button  color ='#002147' style={styles.debitButton} mode='contained' onPress = {()=>{navigation.navigate("Log a Debit")}}>Log a Debit</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  creditButtonView:{
    flex:47,
    paddingBottom :40,
    flexDirection:'column-reverse',
  },
  debitButtonView:{
    flex:47, 
  },
  creditButton:{
    width:300
  },
  debitButton:{
    width:300,
  },
});