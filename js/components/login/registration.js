import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button} from 'react-native-elements';

export default class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            emailValid:true,
            name:'',
            email:'',
            password:''
        }
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    render() {
        return (
            <View style={styles.loginInput}>
                <Input
                    shake={true}
                    leftIcon={
                        <Icon
                            name='user-o'
                            color='rgba(171, 189, 219, 1)'
                            size={25}
                        />
                    }
                    containerStyle={{marginVertical: 10}}
                    onChangeText={name => this.setState({name})}
                    value={this.state.name}
                    inputStyle={styles.input}
                    keyboardAppearance="light"
                    placeholder="Ваше имя"
                    autoFocus={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    placeholderTextColor="black"
                />
                <Input
                    shake={true}
                    leftIcon={
                        <Icon
                            name='envelope-open'
                            color='rgba(171, 189, 219, 1)'
                            size={25}
                        />
                    }
                    containerStyle={{marginVertical: 10}}
                    onChangeText={email => this.setState(email)}
                    value={this.state.email}
                    inputStyle={styles.input}
                    keyboardAppearance="light"
                    placeholder="Email"
                    autoFocus={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    returnKeyType="next"
                    // ref={ input => this.emailInput = input }
                    onSubmitEditing={() => {
                        this.setState({emailValid: this.validateEmail(email)});
                        // this.passwordInput.focus();
                    }}
                    blurOnSubmit={false}
                    placeholderTextColor="black"
                    errorStyle={{textAlign: 'center', fontSize: 12}}
                    errorMessage={this.state.emailValid ? null : "Пожалуйста введите корректный email"}
                />
                <Input
                    leftIcon={
                        <Icon
                            name='lock'
                            color='rgba(171, 189, 219, 1)'
                            size={25}
                        />
                    }
                    containerStyle={{marginVertical: 10}}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    inputStyle={styles.input}
                    secureTextEntry={true}
                    keyboardAppearance="light"
                    placeholder="Пароль"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    returnKeyType="done"
                    ref={ input => this.passwordInput = input}
                    blurOnSubmit={true}
                    placeholderTextColor="black"
                />
                <Button
                    title="Зарегистрироваться"
                    loading={false}
                    loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                    titleStyle={{ fontWeight: "700" }}
                    buttonStyle={{
                        backgroundColor: "#298BD9",
                        width: 300,
                        height: 45,
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 5
                    }}
                    containerStyle={{ marginTop: 20 }}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    loginInput: {
        marginTop:20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        borderColor: 'black',
        marginLeft: 10,
    },
});