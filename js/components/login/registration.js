import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button} from 'react-native-elements';
import { SocialIcon } from 'react-native-elements'

export default class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            emailValid:true,
            name:'',
            email:'',
            password:'',
            showLoading:false
        }
    }
    submitLoginCredentials() {
        const { showLoading } = this.state;

        this.setState({
            showLoading: !showLoading
        });

    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    render() {
        return (
            <View style={styles.loginInput}>
                {/*<View style={{ flex:1, flexDirection: 'row'}}>*/}
                    {/*<SocialIcon*/}
                        {/*style={{backgroundColor:'#4C6EA5', iconColor:'white'}}*/}
                        {/*type='facebook'*/}
                    {/*/>*/}
                    {/*<SocialIcon*/}
                        {/*// light*/}
                        {/*style={{ backgroundColor:'#EF564A', iconColor:'white'}}*/}
                        {/*type='instagram'*/}
                    {/*/>*/}
                    {/*<SocialIcon*/}
                        {/*// light*/}
                        {/*style={{ backgroundColor:'#4C77A6',  iconColor:'white'}}*/}
                        {/*type='vk'*/}
                    {/*/>*/}
                {/*</View>*/}

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
                    onChangeText={email => this.setState({email})}
                    value={this.state.email}
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
                        this.setState({emailValid: this.validateEmail(this.state.email)});
                        this.passwordInput.focus();
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
                    title='Зарегистрироваться'
                    activeOpacity={0.5}
                    underlayColor="transparent"
                    onPress={this.submitLoginCredentials.bind(this)}
                    loading={this.state.showLoading}
                    loadingProps={{size: 'small', color: 'white'}}
                    disabledStyle={styles.inputDisableStyle}
                    disabled={ !this.state.emailValid || this.state.password.length < 8}
                    buttonStyle={styles.button}
                    containerStyle={{marginVertical: 10}}
                    titleStyle={{fontWeight: 'bold', color: 'white'}}
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
    button:{
        height: 50, width: 250, backgroundColor: '#298BD9', borderWidth: 2, borderColor: 'white', borderRadius: 30
    },
    inputDisableStyle:{
        opacity:0.5
    }
});