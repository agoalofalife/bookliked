import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button,ButtonGroup} from 'react-native-elements';

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
        this.updateIndex = this.updateIndex.bind(this)
        this.state = {text: '', selectedIndex: 0};
    }
    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
    }
    render() {
        const buttons = ['Войти', 'Регистрация'];
        const { email, password, email_valid, showLoading, selectedIndex } = this.state;
        return (
            <View style={styles.container}>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={styles.buttonGroup}
                />
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
                        onChangeText={email => this.setState({email})}
                        value={email}
                        inputStyle={styles.input}
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
                        placeholderTextColor="black"
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
                        title="Войти"
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:40,
    },
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
    buttonGroup:{
        height:60,
    }
});