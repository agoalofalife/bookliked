import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native'
import {Avatar, ListItem} from 'react-native-elements'

import {Content} from 'native-base';

export default class ControlPanel extends Component {
    render() {
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

        return (
            <Content style={{backgroundColor:'#FFFFFF'}}>
                <Avatar
                    containerStyle={styles.avatar}
                    xlarge
                    rounded
                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
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
    }
}

const styles = StyleSheet.create({
    avatar: {
        alignSelf: "center",
        marginTop:25,
        marginBottom:20
    },
});