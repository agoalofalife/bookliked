import React, { Component } from 'react';
import RegistrationQrCodeComponent from './../ui/components/RegistrationQrCodeComponent'

export default class RegistrationQrCodeContainer extends Component {
    state = {
        isScanActiveCamera:false
    }
    isActiveCamera(){
        this.setState({
            isScanActiveCamera:true
        })
    }
    render() {
        return (
          <RegistrationQrCodeComponent {...this.state} isActiceCamera={this.isActiveCamera.bind(this)}/>
        );
    }
}