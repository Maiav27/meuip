import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useState } from 'react';
//import  logo from './assets/logo.png'

export default function App() {
 var logo = require('./image/logo.png')
 const [data, setData] = useState('')
 const findMyIp = async () =>{
    setData('descobrindo Ip...')
    const ip = await fetch('http://httpbin.org/ip')
    const dataIp = await ip.json()
    setData(dataIp.origin)
 }
  return (
    <View style={styles.container}>
       <View style={styles.body}>
         <Image  source={logo}  style={{width : 300, height : 90}}/>
        
         <Text style={styles.ip}>{data}</Text>
         <Button title='Descobrir meu IP'  onPress={findMyIp}/>
       </View>
       <View style={styles.footer}>
          <Text style={styles.made}>
             Feito por Vinícius
          </Text>

       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F2336',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  body : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',

  },

  ip : {
    color : 'white',
    paddingTop : 20,
    paddingBottom : 20
  },

  footer : {
    paddingTop : 10,
    paddingBottom : 10,
  },
  made : {
    color : 'white',
    textAlign : 'center'
  }
});
