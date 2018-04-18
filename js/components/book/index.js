import React, { Component } from 'react';
import {View, StyleSheet,Text,Image } from 'react-native';
import { Text as TextElement,Rating } from 'react-native-elements'

export default class Book extends Component{
    constructor(){
        super();

    }
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }
    render(){
        return <View style={styles.container}>
            <TextElement style={styles.text} h3>
                {`Черный город`}
            </TextElement>
            <Image source={{ uri: 'http://fanread.ru/store/book/pictures/3/?src=6938910'}} style={styles.photo} />

            <Rating
                showRating
                type="star"
                fractions={1}
                startingValue={3.6}
                imageSize={50}
                // showReadOnlyText={false}
                readonly={false}
                onFinishRating={this.ratingCompleted}
                style={{ paddingVertical: 10 }}
            />
        </View>
    }
}
const styles = StyleSheet.create({
    container:{
        // flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:30,
    },
    text: {
        fontWeight: 'bold',
        color:'black',
        marginBottom:10,
        // textAlign:'center',
        // fontSize: 12,
    },
    photo: {
        // marginLeft:10,
        height: 170,
        width: 170,
        resizeMode: Image.resizeMode.contain,
    },
});
