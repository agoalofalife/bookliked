import React, {Component} from 'React';
import {TouchableOpacity, StyleSheet, View} from 'react-native'
import {Container, Text, Header, ListItem,Content,List,Left,Body,Right,Title} from 'native-base';
import Modal from "react-native-modal";
import {Icon} from 'react-native-elements'


export default class HistoryOrdersComponent extends Component{
    state = {
        visibleModal:false
    };
    showModal(){
        this.setState({
            visibleModal:true
        })
    }
    render(){
        return (
            <Container style={{backgroundColor: 'white'}}>
                <Header>
                    <Left/>
                    <Body>
                    <Title>История заказов</Title>
                    </Body>
                    <Right />
                </Header>
                <TouchableOpacity style={styles.link}>
                    <Text style={styles.span}>Go back (n-1)</Text>
                </TouchableOpacity>
                <Content>
                    <Modal isVisible={this.state.visibleModal}
                           animationIn="zoomInDown"
                           animationOut="zoomOutUp"
                           animationInTiming={1000}
                           animationOutTiming={1000}
                           backdropTransitionInTiming={1000}
                           backdropTransitionOutTiming={1000}
                           style={{
                               backgroundColor: "white",
                               padding: 22,
                               justifyContent: "center",
                               alignItems: "center",
                               borderRadius: 4,
                               borderColor: "rgba(0, 0, 0, 0.1)"}}>


                        <Icon iconStyle={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignSelf:"flex-end",textAlign: 'right' }}
                                onPress={() => {this.setState({
                                    visibleModal:false
                                })}}
                                name='x'
                                type='foundation'
                                color='black'
                            />
                    </Modal>
                    <List>
                        <ListItem>
                            <Body>
                            <Text>Покупка от 20.02.2018</Text>
                            </Body>
                            <Right>
                                <TouchableOpacity onPress={this.showModal.bind(this)}>
                                <Text note>Посмотреть</Text>
                                </TouchableOpacity>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Body>
                            <Text>Покупка от 20.02.2018</Text>
                            </Body>
                            <Right>
                                <TouchableOpacity onPress={this.showModal.bind(this)}>
                                    <Text note>Посмотреть</Text>
                                </TouchableOpacity>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Body>
                            <Text>Покупка от 20.02.2018</Text>
                            </Body>
                            <Right>
                                <TouchableOpacity onPress={this.showModal.bind(this)}>
                                    <Text note>Посмотреть</Text>
                                </TouchableOpacity>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
                {/*<Button onPress={() => <Redirect to="/home" />}><Text>History orders</Text></Button>*/}
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    scene: {
        flex: 1,
        alignItems: 'flex-start',
        padding: 20,
    },
    link: {
        marginTop: 16,
        marginLeft: -8,
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderWidth: 1,
        borderColor: '#1b95e0',
        borderRadius: 3,
    },
    span: {
        color: '#1581c4',
    },
    strong: {
        marginTop: 5,
        fontWeight: '700',
    },
});