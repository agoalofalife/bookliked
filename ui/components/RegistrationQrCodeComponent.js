import React from 'react';
import {
    StyleSheet,
    // Text,
    TouchableOpacity,
    Linking,
} from 'react-native';
import {Button, Content,Text } from 'native-base';
import QRCodeScanner from 'react-native-qrcode-scanner';


export default () => (
    <Content>
    {/*<Content contentContainerStyle={styles.button}>*/}
        <QRCodeScanner
            onRead={(e) => {
                Linking
                    .openURL(e.data)
                    .catch(err => console.error('An error occured', err));
            }}
            bottomContent={
                <Button rounded info style={styles.button}>
                    <Text>Сканировать QR code</Text>
                </Button>
            }
        />
    {/*<Button rounded info>*/}
        {/*<Text>Сканировать QR code</Text>*/}
    {/*</Button>*/}
    </Content>
);

const styles = StyleSheet.create({
        button: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignSelf: "center",
        },
        centerText: {
            flex: 1,
            fontSize: 18,
            padding: 32,
            color: '#777',
        },
        textBold: {
            fontWeight: '500',
            color: '#000',
        },
        buttonText: {
            fontSize: 21,
            color: 'rgb(0,122,255)',
        },
        buttonTouchable: {
            padding: 16,
        },
    },
);

