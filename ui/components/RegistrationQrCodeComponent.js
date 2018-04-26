import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Linking,
    View
} from 'react-native';
import {Button, Content,Text } from 'native-base';
import QRCodeScanner from 'react-native-qrcode-scanner';


export default ({...props}) => (
    <Content contentContainerStyle={styles.button}>
        {props.dataQrCode ? <Text>{props.dataQrCode}</Text> : null}
        {props.isScanActiveCamera ? <QRCodeScanner
            reactivateTimeout={300}
            showMarker={true}
            onRead={props.saveDataFromQrCode}
            bottomContent={
                <TouchableOpacity style={styles.buttonTouchable} onPress={props.closeCamera}>
                    <Text style={styles.buttonText}>Закрыть камеру</Text>
                </TouchableOpacity>
            }
        /> : null}
        { !props.isScanActiveCamera ?
            <Button rounded info onPress={props.isActiceCamera} >
            <Text>Сканировать QR code</Text>
            </Button>
            : null}
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

