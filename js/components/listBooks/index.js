import React, { Component } from 'react';
import { ListView, StyleSheet, View } from 'react-native';
import Row from './row';

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: 20,
        flexDirection: 'row',
    },
});
import Data from  './data';

export default class ListBooks extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.data = Data;
        this.state = {
            dataSource: ds.cloneWithRows([{},{},{}]),
        };
    }
    render() {
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(data) => {
                    return <View>
                        <Row {...data}/>
                    </View>
                }}
            />
        );
    }
}
//            // renderRow={(data) => <Row {...data} />}