import React from 'React';
import {Container} from 'native-base';
import DrawerContainer from './../../containers/DriverContainer'

export default () => {
    return (
        <Container style={{ backgroundColor:'white'}}>
            <DrawerContainer/>
        </Container>
    )
}