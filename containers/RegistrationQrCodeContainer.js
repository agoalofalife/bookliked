import React, { Component } from 'react';
import RegistrationQrCodeComponent from './../ui/components/RegistrationQrCodeComponent'

export default class RegistrationQrCodeContainer extends Component {
    state = {
        isScanActiveCamera:false,
        dataQrCode:null
    }
    isActiveCamera(){
        this.setState({
            isScanActiveCamera:true
        })
    }
    closeCamera(){
        this.setState({
            isScanActiveCamera:false
        })
    }
    saveDataFromQrCode(e){
        this.setState({
            isScanActiveCamera:false,
            dataQrCode:e.data
        })
    }
    render() {
        return (
          <RegistrationQrCodeComponent {...this.state} closeCamera={this.closeCamera.bind(this)} isActiceCamera={this.isActiveCamera.bind(this)} saveDataFromQrCode={this.saveDataFromQrCode.bind(this)}/>
        );
    }
}