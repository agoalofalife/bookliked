import React from 'react';
import { View, StyleSheet } from 'react-native';
import Book from './book';

const styles = StyleSheet.create({
    container: {
        padding: 12,
        flexDirection: 'row',
    },
});

export default (rowData) => (
    <View style={styles.container}>
        {rowData.props.map((data, i) =>  <Book key={i} {...data}/> )}
    </View>
);