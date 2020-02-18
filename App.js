import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.resultado}></View>
      <View style={styles.calculos}>
        <View style={styles.numeros}>
          <View style={styles.lines}>
            <TouchableOpacity style={styles.buttons}><Text style={styles.text}> 7</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}><Text style={styles.text}> 8</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}><Text style={styles.text}> 9</Text></TouchableOpacity>
          </View>
          <View style={styles.lines}>
            <TouchableOpacity style={styles.buttons}><Text style={styles.text}> 4</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}><Text style={styles.text}> 5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}><Text style={styles.text}> 6</Text></TouchableOpacity>
          </View>
          <View style={styles.lines}>
            <TouchableOpacity style={styles.buttons}><Text style={styles.text}> 1</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}><Text style={styles.text}> 2</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}><Text style={styles.text}> 3</Text></TouchableOpacity>
          </View>
          <View style={styles.lines}>
            <TouchableOpacity style={styles.buttons}><Text style={styles.text}> 0</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}><Text style={styles.text}> ,</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}><Text style={styles.text}> =</Text></TouchableOpacity>
          </View>
        </View>
        <View style={styles.simbolos}>
            <TouchableOpacity style={styles.buttons}><Text style={styles.text}> C</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}><Text style={styles.text}> ÷</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}><Text style={styles.text}> X</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}><Text style={styles.text}> -</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}><Text style={styles.text}> +</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  resultado: {
    flex: 1, 
    backgroundColor: "#fff"
  },
  calculos: {
    flex: 3, 
    flexDirection: "row"
  },
  numeros: {
    flex: 3,
  },
  simbolos:{
    flex: 1,
    margin: 1, 
    alignItems: 'stretch', 
    justifyContent: "space-around"
  },
  buttons:{
    flex: 1,
    margin: 1, 
    backgroundColor: "#282525",
    fontSize: 25, 
    justifyContent: "center", 
    alignItems: "center", 
  
  }, 
  lines: {
    flex: 1, 
    margin: 1, 
    flexDirection: "row"
  }, 
  text:{
    fontSize: 36, 
    color: '#fff'
  } 
 
});
