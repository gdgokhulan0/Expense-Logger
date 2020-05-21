import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import * as firebase from 'firebase';

import DateTimePicker from 'react-native-modal-datetime-picker'
import moment, { isMoment } from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CreditLogger(props) {
    const [date, setDate] = useState();
    const [amount, setAmount] = useState();
    const [description, setDescription] = useState();
    const [datePickerVisibility, setDatePickerVisibility] = useState(false);
    return (
        <View style={styles.creditLoggerView}>
            <TextInput
                label="Date..."
                theme={{ colors: { placeholder: 'white', primary: 'white', underlineColor: 'transparent', text: 'white' } }}
                color='white'
                mode='outlined'
                value={date}
                onFocus={() => { setDatePickerVisibility(true) }}
                style={styles.dateText}
            />
            <DateTimePicker
                mode="date"
                display="default"
                value={date}
                isVisible={datePickerVisibility}
                onConfirm={(dateChanged) => { setDatePickerVisibility(false); setDate(moment(dateChanged).format('DD/MM/YYYY')); }}
                onCancel={() => { setDatePickerVisibility(false) }}
            />
            <TextInput
                label="Amount..."
                theme={{ colors: { placeholder: 'white', primary: 'white', underlineColor: 'transparent', text: 'white' } }}
                mode='outlined'
                value={amount}
                onChangeText={(text) => setAmount(text)}
                keyboardType={'numeric'}
                style={styles.dateText}
            />
            <TextInput
                label="Description..."
                theme={{ colors: { placeholder: 'white', primary: 'white', underlineColor: 'transparent', text: 'white' } }}
                mode='outlined'
                value={description}
                onChangeText={(text) => setDescription(text)}
                style={styles.dateText}
            />
            <View style={styles.logButton}>
                <TouchableOpacity>
                    <Button 
                    color='white' 
                    dark={true} 
                    onPress ={()=>{
                        firebase.database().
                        ref(`CreditLogs/${new Date}`).
                        set({
                            logDate : date,
                            itemAmount : amount,
                            itemDescription :description,   
                        }).then(()=>console.log("Inserted"))
                        .catch((err) => console.log(err));
                        props.navigation.navigate('Home');
                    }}
                    >Log</Button>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    creditLoggerView: {
        flex: 1,
        backgroundColor: '#121212'
    },
    dateText: {
        padding: 10,
        fontWeight: 'bold',
        backgroundColor: '#000',
    },
    logButton: {
        padding: 40
    },
});