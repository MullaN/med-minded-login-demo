import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Login = ({submitLogin}) => {

    const [nameText, setNameText] = useState('');
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    return (
        <View style={styles.loginView}>
            <TextInput style={styles.loginTextInput} placeholder='Name' onChangeText={(text) => setNameText(text)}/>
            <TextInput style={styles.loginTextInput} placeholder='Email' onChangeText={(text) => setEmailText(text)}/>
            <TextInput style={styles.loginTextInput} placeholder='Password' secureTextEntry={true} onChangeText={(text) => setPasswordText(text)}/>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginBtnText}>
                    Create Account
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={() => submitLogin({name: nameText, email: emailText, password: passwordText})}>
                <Text style={styles.loginBtnText}>
                    Sign In
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    loginView: {
        margin: 50
    },
    loginTextInput: {
        width: 300,
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        height: 50,
        backgroundColor: 'white'
    },
    loginBtn: {
        width: 300,
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        height: 50,
        backgroundColor: 'darkslateblue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginBtnText: {
        color: 'white',
        fontSize: 25
    }
});

export default Login