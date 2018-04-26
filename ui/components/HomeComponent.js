import React, {Component} from 'React';
import {Container} from 'native-base';
import DrawerContainer from '../../containers/DriwerContainer'

export default class HomeComponent extends Component{
   // constructor(){
   //     super()
   //     console.log('HomeComponent', this)
   // }
    render(){
        return (
            <Container style={{ backgroundColor:'white'}}>
                <DrawerContainer {...this.props}/>
            </Container>
        )
    }
}