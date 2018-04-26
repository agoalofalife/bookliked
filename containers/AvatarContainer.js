import React from 'React';

import ImagePicker from 'react-native-image-picker';
import ControlPanelComponent from './../ui/components/ControlPanelComponent';

export default class AvatarContainer extends React.Component {
    constructor(props){
        super(props)
    }
    state = {
        ImageSource: require('./../assets/images/stub_user.png'),
        loadAvatar:false
    };

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                this.setState({
                    loadAvatar: true
                });
                // stub load image to server
                setTimeout(() => {
                    this.setState({
                        ImageSource: source,
                        loadAvatar: false
                    });
                }, 2000);
                let source = {uri: response.uri};
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

            }
        });
    }

    render() {
        return (
            <ControlPanelComponent navigate={this.props.history} selectPhoto={this.selectPhotoTapped.bind(this)} imageSource={this.state.ImageSource} {...this.state}/>
        )
    }
}