import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const col1Buttons = [
  ['7','8','9'], 
  ['4','5','6'], 
  ['1','2','3'],
  [',','0','=']
]

const col2Buttons = ["C", "÷", "x", "-", "+"]

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.display}> Display</Text>
      <Text style={styles.result}>Result</Text>
      <View style={styles.buttons}>
        <View style={styles.col1}>
          {col1Buttons.map((line,i)=><View key={i}style={styles.line}>
          {line.map(op=><View key={op} style={styles.btn}>
            <Text style={styles.btnText}>{op}</Text>
          </View>)}
          </View>)}
        </View>
        <View style={styles.col2}>{col2Buttons.map(op=><View key={op} style={styles.btn}>
            <Text style={styles.btnText}>{op}</Text>
          </View>)}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  display:{
    flex:1,
    backgroundColor: "#EFEFEF", 
    fontSize: 80,
    textAlign: 'right',
    paddingTop: 30,
    paddingRight: 10
  }, 
  result: {
    flex: 0.4, 
    backgroundColor: "#EFEFEF", 
    fontSize: 40,
    textAlign: 'right',
    paddingRight: 10, 
    paddingBottom: 10
  }, 
  buttons: {
    flex: 5, 
    flexDirection: 'row'
  },
  col1:{
    flex: 3, 
    backgroundColor: 'grey'
  }, 
  col2: {
    flex: 1, 
    backgroundColor: "red"
  }, 
  line: {
    flex: 1, 
    flexDirection: "row"
  }, 
  btn: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 

  }, 
  btnText:{
    textAlign: "center", 
    fontSize: 50
  }

});
