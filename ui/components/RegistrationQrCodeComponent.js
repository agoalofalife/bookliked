import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import {Button, Content, Container,Text } from 'native-base';

export default () => (
    <Container>
    <Content style={styles.button}>
    <Button rounded info>
        <Text>Сканировать QR code</Text>
    </Button>
    </Content>
    </Container>
);

const styles = StyleSheet.create({
        button: {
            alignSelf: "center",
        }
    },
);

