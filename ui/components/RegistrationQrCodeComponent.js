import React from 'react';
import {
    StyleSheet,
    // Text,
    TouchableOpacity,
    Linking,
    View
} from 'react-native';
import {Button, Content,Text } from 'native-base';
import QRCodeScanner from 'react-native-qrcode-scanner';


export default ({...props}) => (
    <Content contentContainerStyle={styles.button}>
        {props.isScanActiveCamera ? <QRCodeScanner
            showMarker={true}
            onRead={(e) => {
                console.info(e)
                // Linking
                //     .openURL(e.data)
                //     .catch(err => console.error('An error occured', err));
            }}
            // bottomContent={
            //     <Button rounded info style={styles.button}>
            //         <Text>Сканировать QR code</Text>
            //     </Button>
            // }
        /> : null}
        { !props.isScanActiveCamera ? <Button rounded info onPress={props.isActiceCamera} >
            <Text>Сканировать QR code</Text>
        </Button> : null}
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

