import React, { Component } from 'react';
import {StyleSheet, ActivityIndicator, FlatList, Text, View, Image, TouchableOpacity,SafeAreaView,TextInput} from 'react-native';
const IP = require('./ipcim');

export default class Videokartya extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async getMovies() {
    try {
      const response = await fetch(IP.ipcim+'videokartya');
      const json = await response.json();
      console.log(json)
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getMovies();
  }



  render() {
    const { data, isLoading } = this.state;

    return (
      
      <SafeAreaView style={styles.container}>

      <View style={styles.hatter}>
      
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ videokartya_id}, index) => videokartya_id}
            renderItem={({ item }) => (
              
              <View style={[{marginBottom:30}]}>
                <View>
                <Text style={styles.marka}>
                {item.videokartya_marka}
              </Text>
              <Text style={styles.tipus}>
                {item.videokartya_nev}
              </Text>
              </View>
              <View style={{flexDirection: "row"}}>
              <View style={{flex:2}}>
              <Image   source={{uri: IP.ipcim+item.videokartya_kep+'.jpg'}} style={styles.kep}   />
              </View> 


                <View style={{flex:2}}>
              <Text style={styles.adatok}>
                Belső MB: 
                {item.videokartya_belsomb}
              </Text>
              <Text style={styles.adatok}>
                Foglalat: 
                {item.videokartya_foglalat}
              </Text>
              <Text style={styles.adatok}>
                Fogyasztás: 
                 {item.videokartya_fogyasztas} Watt
              </Text>
              </View>
              </View>    
              </View>
            )}
          />
        )}
      </View>
      </SafeAreaView>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 2,
    backgroundColor:"black"
  },
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    marginLeft:30,
    marginRight:30
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  tipus:{
    fontSize:18,
    color:'white',
    textAlign:'left',
    marginBottom:8,
    textShadowOffset:{
      height:5,
      width:5
    },
    textShadowColor:'black',
    textShadowRadius:10,
    paddingStart:10
  },

  hatter:{
    flex:1,
    marginTop:50,
    marginBottom:10,
    backgroundColor: '#9969D1',
    marginHorizontal: 20,
    borderRadius:20,
    borderColor:'purple',
    borderWidth:5
  },
  marka:{
    textAlign:'left',
    fontSize:21,
    color:'white',
    fontWeight:'bold',
    margin:5,
    textShadowOffset:{
      height:5,
      width:5
    },
    textShadowColor:'black',
    textShadowRadius:10
  },
  kep:{
    width:150,
    height:150,
    alignSelf:'flex-start',
    borderRadius:20,
    borderColor:'purple',
    borderWidth:5,
    marginLeft:10
  },
  adatok:{
    fontSize:14,
    color:'white',
    textAlign:'left',
    marginBottom:8,
    textShadowOffset:{
      height:5,
      width:5
    },
    textShadowColor:'black',
    textShadowRadius:10,
    paddingStart:10
  }
});