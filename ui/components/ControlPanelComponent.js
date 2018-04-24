
import React, { Component } from 'react';
import {
    // PropTypes,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import {Avatar, ListItem} from 'react-native-elements'

import {Content,Thumbnail} from 'native-base';

export default class ControlPanel extends Component {
    // static propTypes = {
    //     closeDrawer: PropTypes.func.isRequired
    // };

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
        ]


        // let {closeDrawer} = this.props
        return (
            <Content style={{backgroundColor:'#FFFFFF'}}>
                <Avatar
                    containerStyle={{ alignSelf: "center", marginTop:25, marginBottom:20}}
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

{/*<ScrollView style={styles.container}>*/}
{/*<Text style={styles.controlText}>Control Panel</Text>*/}
{/*<TouchableOpacity style={styles.button} onPress={() => {}}>*/}
{/*<Text>Close Drawer</Text>*/}
{/*</TouchableOpacity>*/}
{/*</ScrollView>*/}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'black',
    },
    controlText: {
        color: 'white',
    },
    button: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
    }
});