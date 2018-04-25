import React, { Component } from 'react';
import { Drawer, Header, Left,Button,Icon,Title, Body } from 'native-base';
import ControlPanelComponent from './../ui/components/ControlPanelComponent';
import ImagePickerContainer from "./AvatarContainer";

export default class DrawerContainer extends Component {
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
                content={<ImagePickerContainer/>}
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
            </Drawer>
        );
    }
}