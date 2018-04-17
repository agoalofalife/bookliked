import React, { Component } from 'react';
import {Text, TextInput, View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
            email: '',
            email_valid: true,
            password: '',
            login_failed: false,
            showLoading: false
        };

        this.state = {text: ''};
    }

    render() {
        const { email, password, email_valid, showLoading } = this.state;
        return (
            <View style={styles.container}>
                <Input
                    placeholder='Как вас зовут?
                    '
                    shake={true}
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    }
                />
                <Input
                    placeholder='Почтовый адрес'
                    // errorStyle={{ color: 'red' }}
                    // errorMessage='Почтовый адрес неверен!'
                    leftIcon={
                        <Icon
                            name='envelope'
                            size={24}
                            color='black'
                        />
                    }
                    shake={true}
                />
                <Input
                    placeholder='Пароль'
                    leftIcon={
                        <Icon
                            name='unlock-alt'
                            size={24}
                            color='black'
                        />
                    }
                    shake={true}
                />
                <Input
                    placeholder='Подтвердить пароль'
                    leftIcon={
                        <Icon
                            name='unlock-alt'
                            size={24}
                            color='black'
                        />
                    }
                    shake={true}
                />
                <View style={styles.loginInput}>
                    <Input
                        leftIcon={
                            <Icon
                                name='user-o'
                                color='rgba(171, 189, 219, 1)'
                                size={25}
                            />
                        }
                        containerStyle={{marginVertical: 10}}
                        onChangeText={email => this.setState({email})}
                        value={email}
                        inputStyle={{marginLeft: 10, color: 'white'}}
                        keyboardAppearance="light"
                        placeholder="Email"
                        autoFocus={false}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        returnKeyType="next"
                        ref={ input => this.emailInput = input }
                        onSubmitEditing={() => {
                            this.setState({email_valid: this.validateEmail(email)});
                            this.passwordInput.focus();
                        }}
                        blurOnSubmit={false}
                        placeholderTextColor="white"
                        errorStyle={{textAlign: 'center', fontSize: 12}}
                        errorMessage={email_valid ? null : "Пожалуйста введите ваше имя"}
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
                    value={password}
                    inputStyle={{marginLeft: 10, color: 'white'}}
                    secureTextEntry={true}
                    keyboardAppearance="light"
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    returnKeyType="done"
                    ref={ input => this.passwordInput = input}
                    blurOnSubmit={true}
                    placeholderTextColor="white"
                />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loginInput: {
        marginTop:20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});