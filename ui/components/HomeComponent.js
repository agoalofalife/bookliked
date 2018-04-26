import React, {Component} from 'React';
import {Container} from 'native-base';
import DrawerContainer from '../../containers/DriwerContainer'

export default class HomeComponent extends Component{
    render(){
        return (
            <Container style={{ backgroundColor:'white'}}>
                <DrawerContainer {...this.props}/>
            </Container>
        )
    }
}