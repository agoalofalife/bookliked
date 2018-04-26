import React from 'React';
import {TouchableOpacity, StyleSheet} from 'react-native'
import {Container, Text, Button, Header, ListItem,Content,List,Left,Body,Right,Title} from 'native-base';

export default () => {
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
            <Content>                <List>
                    <ListItem>
                        <Body>
                        <Text>Kumar Pratik</Text>
                        <Text note>Doing what you like will always keep you happy . .</Text>
                        </Body>
                        <Right>
                            <Text note>3:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Text>Nathaniel Clyne</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Dejan Lovren</Text>
                    </ListItem>
                </List>
            </Content>
        {/*<Button onPress={() => <Redirect to="/home" />}><Text>History orders</Text></Button>*/}
    </Container>
    )
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