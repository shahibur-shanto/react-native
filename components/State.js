import React ,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native';

const  State = ()=> {
    
    
    return (
    

        <View>
            <Text style={styles.container}>Hi There</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        fontSize:40,
        },
})


export default State;