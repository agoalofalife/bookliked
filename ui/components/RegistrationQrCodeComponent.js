import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import {Button, Content,Text } from 'native-base';
// import QRCodeScanner from 'react-native-qrcode-scanner';


export default () => (
    <Content contentContainerStyle={styles.button}>
    <Button rounded info>
        <Text>Сканировать QR code</Text>
    </Button>
    </Content>
);

const styles = StyleSheet.create({
        button: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignSelf: "center",
        }
    },
);

