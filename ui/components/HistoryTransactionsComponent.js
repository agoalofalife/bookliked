import React, {Component} from 'React';
import {TouchableOpacity, StyleSheet, View} from 'react-native'
import {Container, Text, Header, ListItem,Content,List,Left,Body,Right,Title, CardItem, Card} from 'native-base';

export default class HistoryTransactionsComponent extends Component {
   render(){
       return (
           <Container style={{backgroundColor: 'white'}}>
               <Header>
                   <Body>
                   <Title>История переводов</Title>
                   </Body>
                   <Right />
               </Header>
               <TouchableOpacity style={styles.link} onPress={() => this.props.history.goBack()}>
                   <Text style={styles.span}>Вернуться</Text>
               </TouchableOpacity>
               <Content>
                   <List>
                       {
                           [...Array(3)].map((s, i) =>
                               <ListItem key={i}>
                                   <Body>
                                   <Text>Yandex Кошелек</Text>
                                   <Text note>20 $</Text>
                                   </Body>
                               </ListItem>
                           )
                       }
               </List>
               </Content>
           </Container>
       )
   }
}
const styles = StyleSheet.create({
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
    // strong: {
    //     marginTop: 5,
    //     fontWeight: '700',
    // },
});