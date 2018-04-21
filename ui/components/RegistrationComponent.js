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
            <Label>Придумайте имя</Label>
            <Input />
        </Item>
        <Item stackedLabel last>
            <Label>Пароль</Label>
            <Input secureTextEntry={true}/>
        </Item>
        <Button block info>
            <Text>Зарегистрироваться</Text>
        </Button>
    </Form>
);

const styles = StyleSheet.create({
        form: {
            backgroundColor:"white",
            width:width -  40,
            alignSelf: "center",
            marginTop:20
        }
    },
);

