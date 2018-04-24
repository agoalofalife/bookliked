import React from 'React';
import {Footer, Container,} from 'native-base';
import FooterComponent from './FooterNavigator';
import DrawerContainer from './../../containers/DriverContainer'
import PickImageComponent from './PickImageComponent'

export default () => {
    return (
        <Container style={{ backgroundColor:'white'}}>
            <DrawerContainer/>
            <PickImageComponent/>
            <Footer>
            <FooterComponent/>
            </Footer>
        </Container>
    )
}