import React, { Component } from 'react';
import { Button, StyleSheet, View,Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { black } from 'jest-util/node_modules/chalk';
const IP = require('./ipcim'); 
export default class ButtonBasics extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      ki_alap:0,
      data2:[],
      ki_alap2:0,
      data3:[],
      ki_alap3:0,
      data4:[],
      ki_alap4:0,
      data5:[],
      ki_alap5:0
    };
  } 

  async lefajta() {

    //Alaplap
    try {
      const response = await fetch(IP.ipcim+'alaplap');
      const json = await response.json();
      console.log(json)
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }

    //Processzor
    try {
      const response = await fetch(IP.ipcim+'processzor');
      const json = await response.json();
      console.log(json)
      this.setState({ data2: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }

     //Videókártya
     try {
      const response = await fetch(IP.ipcim+'videokartya');
      const json = await response.json();
      console.log(json)
      this.setState({ data3: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }

    //Memória
    try {
      const response = await fetch(IP.ipcim+'memoria');
      const json = await response.json();
      console.log(json)
      this.setState({ data4: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }

    //Tápegység
    try {
      const response = await fetch(IP.ipcim+'tapegyseg');
      const json = await response.json();
      console.log(json)
      this.setState({ data5: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.lefajta();
  }


  render() {
    return (
 
    <View style={styles.container}>
      <View style={styles.hatter}>

          {/*Alaplap*/}

        <Text style={styles.alkatresz}>Alaplap</Text>
      <Picker style={styles.pickerstilus} 
              selectedValue={this.state.ki_alap}
              onValueChange={(itemValue) => this.setState({ki_alap:itemValue})}>
              {this.state.data.map(item=>
                <Picker.Item label={item.alaplap_marka} value={item.alaplap_id} />
              )}                                  
      </Picker>

          {/*Processzor*/}

      <Text style={styles.alkatresz}>Processzor</Text>
      <Picker style={styles.pickerstilus}
              selectedValue={this.state.ki_alap2}
              onValueChange={(itemValue) => this.setState({ki_alap2:itemValue})}>
              {this.state.data2.map(item=>
                <Picker.Item label={item.processzor_marka} value={item.processzor_id} />
              )}                                  
      </Picker>

          {/*Videókártya*/}

      <Text style={styles.alkatresz}>Videókártya</Text>
      <Picker style={styles.pickerstilus}
              selectedValue={this.state.ki_alap3}
              onValueChange={(itemValue) => this.setState({ki_alap3:itemValue})}>
              {this.state.data3.map(item=>
                <Picker.Item label={item.videokartya_marka} value={item.videokartya_id} />
              )}                                  
      </Picker>

           {/*Memória*/}

      <Text style={styles.alkatresz}>Memória</Text>
      <Picker style={styles.pickerstilus}
              selectedValue={this.state.ki_alap4}
              onValueChange={(itemValue) => this.setState({ki_alap4:itemValue})}>
              {this.state.data4.map(item=>
                <Picker.Item label={item.memoria_marka} value={item.memoria_id} />
              )}                                  
      </Picker>


      {/*Tápegység*/}

      <Text style={styles.alkatresz}>Tápegység</Text>
      <Picker style={styles.pickerstilus}
              selectedValue={this.state.ki_alap5}
              onValueChange={(itemValue) => this.setState({ki_alap5:itemValue})}>
              {this.state.data5.map(item=>
                <Picker.Item label={item.tapegyseg_marka} value={item.tapegyseg_id} />
              )}                                  
      </Picker>
    </View>
    </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   backgroundColor:'black'
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  hatter:{
    flex:1,
    marginTop:50,
    marginBottom:10,
    backgroundColor: '#9969D1',
    marginHorizontal: 20,
    borderRadius:20,
    borderColor:'purple',
    borderWidth:5,
    padding:10
  },
  pickerstilus:{
    textDecorationLine:'underline',
    borderColor:'black',
    borderWidth:5,
    borderRadius:20,
    height:20,
    width:300,
    backgroundColor:'white',
    margin:15,

  },
  alkatresz:{
    fontWeight:'bold',
    fontSize:18
  }
});