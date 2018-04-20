import React from 'react';
import {
    StyleSheet,
    Dimensions,
} from 'react-native';
import {Button, Form, Item, Input, Label,Text } from 'native-base';

const {width} = Dimensions.get('window');

export default () => (
    <Form style={styles.form}>
        <Item stackedLabel>
            <Label>Логин</Label>
            <Input />
        </Item>
        <Item stackedLabel last>
            <Label>Пароль</Label>
            <Input />
        </Item>
        <Button block info>
            <Text>Войти</Text>
        </Button>
    </Form>
);

const styles = StyleSheet.create({
    form: {
        backgroundColor:"white",
        width:width -  40,
        alignSelf: "center",
        marginTop:20}
    },
);

