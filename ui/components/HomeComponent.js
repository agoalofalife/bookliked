import React from 'React';
import {Footer, Container,} from 'native-base';
import FooterComponent from './FooterNavigator';
import DrawerContainer from './../../containers/DriverContainer'

export default () => {
    return (
        <Container style={{ backgroundColor:'white'}}>
            <DrawerContainer/>
            <Footer>
            <FooterComponent/>
            </Footer>
        </Container>
    )
}