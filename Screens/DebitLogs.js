import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import * as firebase from 'firebase';


export default function DebitLogs() {
    const [logs, setLogs] = useState([]);
    function fetchFromDatabase() {
        const newItems = [];
        firebase.database().ref('DebitLogs').once('value', (snapshot) => {
            console.log("Establising Connection");
            const data = snapshot.val();
            if (!data) {
                console.log("No Data Fetched");
                return;
            }
            const keys = Object.keys(data);
            keys.forEach(key => {
                newItems.push({
                    "Amount": data[key].itemAmount,
                    "logDate": data[key].logDate,
                    "Description": data[key].itemDescription,
                })
            });
        }).then(() => {
            setLogs(newItems);
        })
    }
    useEffect(() => {
        fetchFromDatabase();
    });
    return (
        <View style={{ flex: 1 }}>
            <DataTable style={{ flex: 1, backgroundColor:'#121212' }}>
                <DataTable.Header>
                    <DataTable.Title theme={{ colors: { placeholder: 'white', primary: 'white', text: 'white' } }}>Date</DataTable.Title>
                    <DataTable.Title theme={{ colors: { placeholder: 'white', primary: 'white', text: 'white' } }}>Description</DataTable.Title>
                    <DataTable.Title numeric theme={{ colors: { placeholder: 'white', primary: 'white', text: 'white' } }}>Amount</DataTable.Title>
                </DataTable.Header>
                <ScrollView style={{ flex: 1 }}>
                    {
                        logs.map(loggedItem => <DataTable.Row >
                            <DataTable.Cell><Text style={{color:'white'}}>{`${loggedItem.logDate}`}</Text></DataTable.Cell>
                            <DataTable.Cell><Text style={{color:'white'}}>{`${loggedItem.Description}`}</Text></DataTable.Cell>
                            <DataTable.Cell numeric><Text style={{color:'white'}}>{`${loggedItem.Amount}`}</Text></DataTable.Cell>
                        </DataTable.Row>)
                    }
                </ScrollView>
            </DataTable>
        </View>
    );
}