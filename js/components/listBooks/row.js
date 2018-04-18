import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import Book from './book';

export default class Row extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return <View style={styles.container}>
            {this.props.props.map((data, i) =>  <Book key={i} {...data} changeShowListBook={this.props.changeShowListBook}/> )}
        </View>
    }
}

// export default (rowData) => (
//     <View style={styles.container}>
//         {console.log(this, 'row')}
//         {rowData.props.map((data, i) =>  <Book key={i} {...data}/> )}
//     </View>
// );


const styles = StyleSheet.create({
    container: {
        padding: 12,
        flexDirection: 'row',
    },
});