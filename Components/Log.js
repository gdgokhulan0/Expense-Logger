import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Logs(props){
    return (
        <View style ={styles.container}>
            <Text>{`${props.log.logDate}`}</Text>
            <Text>{`${props.log.Amount}`}</Text>
            <Text>{`${props.log.Description}`}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container : {
        flex :1, 
        backgroundColor :'#121212'
    }
})