import React from 'react';
import {Button, Footer, FooterTab,Text } from 'native-base';

export default (state) => {
    return (<Footer>
        <FooterTab>
            <Button active>
                <Text>Регистрация чеков</Text>
            </Button>
            <Button>
                <Text>Призы</Text>
            </Button>
        </FooterTab>
    </Footer>)
}