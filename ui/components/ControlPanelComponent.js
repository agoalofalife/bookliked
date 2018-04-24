import React from 'react';
import {
    StyleSheet,
} from 'react-native'
import {Avatar, ListItem} from 'react-native-elements'
import {Content} from 'native-base';

const stubUserUri = './../../assets/images/stub_user.png';

const list = [
            {
                title: 'История покупок',
                icon: 'shopping-basket'
            },
            {
                title: 'История переводов',
                icon: 'credit-card'
            },
        ];

export default () => (
    <Content style={styles.content}>
        <Avatar
            containerStyle={styles.avatar}
            xlarge
            rounded
            source={require(stubUserUri)}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}/>
        {
            list.map((item, i) => (
                <ListItem
                    key={i}
                    title={item.title}
                    leftIcon={{ name: item.icon }}
                />
            ))
        }
    </Content>
)

const styles = StyleSheet.create({
    content:{
        backgroundColor:'#FFFFFF'
    },
    avatar: {
        alignSelf: "center",
        marginTop:25,
        marginBottom:20
    },
});