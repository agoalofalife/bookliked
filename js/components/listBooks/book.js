import React,{Component} from 'react';
import {Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        marginTop:5,
        textAlign:'center',
        fontSize: 12,
    },
    photo: {
        marginLeft:10,
        height: 120,
        width: 120,
        resizeMode: Image.resizeMode.contain,
    },
});

export default class Book extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return (
            <TouchableOpacity onPress={() => {
               this.props.changeShowListBook(false)
                console.log('choose book')
            }}>
                <Image source={{ uri: this.props.book.url}} style={styles.photo} />
                <Text style={styles.text}>
                    {`${this.props.book.title}`}
                </Text>
            </TouchableOpacity>
        )
    }
}