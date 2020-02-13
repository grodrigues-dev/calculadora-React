import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.resultado}></View>
      <View style={styles.calculos}>
        <View style={styles.numeros}>
          <View style={styles.lines}>
            <View style={styles.buttons}></View>
            <View style={styles.buttons}></View>
            <View style={styles.buttons}></View>
          </View>
          <View style={styles.lines}>
            <View style={styles.buttons}></View>
            <View style={styles.buttons}></View>
            <View style={styles.buttons}></View>
          </View>
          <View style={styles.lines}>
            <View style={styles.buttons}></View>
            <View style={styles.buttons}></View>
            <View style={styles.buttons}></View>
          </View>
          <View style={styles.lines}>
            <View style={styles.buttons}></View>
            <View style={styles.buttons}></View>
            <View style={styles.buttons}></View>
          </View>
        </View>
        <View style={styles.simbolos}>
          <View style={styles.buttons}></View>
          <View style={styles.buttons}></View>
          <View style={styles.buttons}></View>
          <View style={styles.buttons}></View>
          <View style={styles.buttons}></View>
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
  }, 
  lines: {
    flex: 1, 
    margin: 1, 
    flexDirection: "row"
  }
 
});
