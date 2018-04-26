import React from 'react';
import {
    StyleSheet,
    Dimensions,
} from 'react-native';
import {Button, Form, Item, Input, Label,Text } from 'native-base';

const {width} = Dimensions.get('window');

export default ({dispatchSignIn, navigateMenu}) => {
    let _login, _password, _email;

    return (
        <Form style={styles.form}>
            <Item stackedLabel>
                <Label>Имя</Label>
                <Input placeholder='Ваше имя' onChangeText={input => _login = input}/>
            </Item>
            <Item stackedLabel>
                <Label>Email</Label>
                <Input placeholder='Почта' onChangeText={input => _email = input}/>
            </Item>
            <Item stackedLabel last>
                <Label>Пароль</Label>
                <Input placeholder='Придумайте пароль'  onChangeText={input => _password = input} secureTextEntry={true}/>
            </Item>
            <Button block info onPress={() => {
                dispatchSignIn(_login, _password).then(_ => {
                    navigateMenu()
                })
            }}>
                <Text>Зарегистрироваться</Text>
            </Button>
        </Form>)
};

const styles = StyleSheet.create({
        form: {
            backgroundColor:"white",
            width:width -  40,
            alignSelf: "center",
            marginTop:20}
    },
);

