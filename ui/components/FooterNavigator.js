import React from 'react';
import {Button, Footer, FooterTab,Text } from 'native-base';

export default () => (
    <Footer>
        <FooterTab>
            <Button>
                <Text>Регистрация чеков</Text>
            </Button>
            <Button>
                <Text>Призы</Text>
            </Button>
        </FooterTab>
    </Footer>
)