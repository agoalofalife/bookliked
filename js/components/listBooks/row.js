import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 12,
        flexDirection: 'row',
        // alignItems: 'center',
    },
    text: {
        // marginLeft: 15,
        marginTop:5,
        textAlign:'center',
        fontSize: 12,
    },
    photo: {
        marginLeft:15,
        height: 110,
        width: 110,
        resizeMode: Image.resizeMode.contain,
        // borderRadius: 20,

    },
});

export default (props) => (
    <View style={styles.container}>
        <View>
            <Image source={{ uri: 'https://wcbook.ru/data/book/39/396646.jpg'}} style={styles.photo} />
            <Text style={styles.text}>
            {`Книга`}
            </Text>
        </View>
        <View>
            <Image source={{ uri: 'https://wcbook.ru/data/book/39/396646.jpg'}} style={styles.photo} />
            <Text style={styles.text}>
                {`Книга`}
            </Text>
        </View>
        <View>
            <Image source={{ uri: 'https://wcbook.ru/data/book/39/396646.jpg'}} style={styles.photo} />
            <Text style={styles.text}>
                {`Книга`}
            </Text>
        </View>
        {/*<Image source={{ uri: props.picture.large}} style={styles.photo} />*/}
        {/*<Text style={styles.text}>*/}
            {/*{`${props.name.first} ${props.name.last}`}*/}
        {/*</Text>*/}
    </View>
);