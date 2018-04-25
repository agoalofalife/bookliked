import React from 'React';
import {Footer, Container,Content} from 'native-base';
import FooterComponent from './FooterNavigator';
import DrawerContainer from './../../containers/DriverContainer'
import RegistrationQrCodeComponent from './RegistrationQrCodeComponent'
export default () => {
    return (
        <Container style={{ backgroundColor:'white'}}>
            <DrawerContainer/>
            <RegistrationQrCodeComponent/>
            <Footer>
            <FooterComponent/>
            </Footer>
        </Container>
    )
}