import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button,ButtonGroup} from 'react-native-elements';

import RegistraionComponent from './registration';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
            email: '',
            email_valid: true,
            password: '',
            login_failed: false,
            showLoading: false,
            showSignInComponent:true,
            showRegistrationComponent:false,
            text:'',
            selectedIndex: 0,
        };
        this.updateIndex = this.updateIndex.bind(this);
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    updateIndex (selectedIndex) {
        // switch mode component
        if (selectedIndex === 0) {
            this.state.showSignInComponent = true
            this.state.showRegistrationComponent = false
        } else {
            this.state.showSignInComponent = false
            this.state.showRegistrationComponent = true
        }
        this.setState({selectedIndex})
    }
    render() {
        const { email, password, email_valid, showLoading, selectedIndex, showSignInComponent,showRegistrationComponent } = this.state;
        return (
            <View style={styles.container}>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={['Войти', 'Регистрация']}
                    containerStyle={styles.buttonGroup}
                />
                {showSignInComponent && <View style={styles.loginInput}>
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
                        title='Войти'
                        activeOpacity={1}
                        underlayColor="transparent"
                        onPress={() => {
                            this.setState({
                                showLoading:true
                            });
                            setTimeout(() => {
                                console.info('Sign in !', this.props.changeAuth(true));
                            }, 2000)
                        }}
                        loading={this.state.showLoading}
                        loadingProps={{size: 'small', color: 'white'}}
                        disabledStyle={styles.inputDisableStyle}
                        disabled={ this.state.email_valid && this.state.password.length < 8}
                        buttonStyle={{height: 50, width: 250, backgroundColor: '#298BD9', borderWidth: 2, borderColor: 'white', borderRadius: 30}}
                        containerStyle={{marginVertical: 10}}
                        titleStyle={{fontWeight: 'bold', color: 'white'}}
                    />
                </View>}
                {showRegistrationComponent && <RegistraionComponent/>}
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
    inputDisableStyle:{
        opacity:0.5
    },
    buttonGroup:{
        height:60,
    }
});