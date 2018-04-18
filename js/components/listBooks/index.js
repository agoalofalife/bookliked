import React, { Component } from 'react';
import { ListView, StyleSheet, View } from 'react-native';
import Row from './row';

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row',
    },
});
import Data from  './data';
import _ from 'lodash';

export default class ListBooks extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // this.data = Data;

        this.state = {
            show:true,
            dataSource: ds.cloneWithRows(_.chunk(Data, 3)),
        };
    }
    changeShow = (bool) => {
        this.setState({show:bool})
    }
    render() {
        return (
            <View>
            {this.state.show && <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => {
                    return <View>
                        <Row props={rowData} changeShowListBook={this.changeShow}/>
                    </View>
                }}
            />}
            </View>
        );
    }
}