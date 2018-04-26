import React, { Component } from 'react';
import { Drawer, Header, Left,Button,Icon,Title, Body,Footer } from 'native-base';
import ImagePickerContainer from "./AvatarContainer";
import RegistrationQrCodeContainer from './../containers/RegistrationQrCodeContainer'
import FooterComponent from './../ui/components/FooterNavigator';

export default class DrawerContainer extends Component {
    constructor(props){
        super(props)
    }
    closeDrawer() {
        this.drawer._root.close()
    }
    openDrawer() {
        this.drawer._root.open()
    }
    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<ImagePickerContainer {...this.props} />}
                onClose={() => this.closeDrawer()} >
                <Header style={{backgroundColor: "#fce82f"}}>
                    <Left>
                        <Button transparent onPress={() => this.openDrawer()}>
                            <Icon name="menu" style={{ color:'black'}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={{color:'black', fontFamily: "Nexa_Script_Heavy"}}>Bananas</Title>
                    </Body>
                </Header>
                <RegistrationQrCodeContainer/>
                <Footer>
                    <FooterComponent/>
                </Footer>
            </Drawer>
        );
    }
}