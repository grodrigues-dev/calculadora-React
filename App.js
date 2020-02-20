import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
 

export default function  App() {
  
  const [calc, setCalc] = useState([]);
  const [resultado, setResultado] = useState([])
  
  const push = (item) =>{
    setCalc(state =>
       [...state, item]
       
    )
    
  } 

  function clear(){
    setCalc([])
    setResultado([])
    console.log('oi');
    
  }

  function Calcular(){
    let operacao = calc.filter(x => typeof(x)==="string")
    let numeros = calc.join('').split(operacao)
    let result; 
    switch (operacao[0]) {
      case '+':
       result = numeros[0]+numeros[1]
        break;
      case '-':
        result = numeros[0]-numeros[1]
        break;
      case '/':
        result = numeros[0]/numeros[1]
        break;
      case '*':
        result = numeros[0]*numeros[1]
        break;
      default:
        break;
    }
    console.log(result, operacao);
    
    setResultado(result)
  }

  return (
    <View style={styles.container}>
      <View style={styles.resultado}>
        <Text style={styles.TextResult}>{calc}</Text>
        <Text style={styles.TextResult}>{resultado}</Text>
      </View>
      <View style={styles.calculos}>
        <View style={styles.numeros}>
          <View style={styles.lines}>
            <TouchableOpacity style={styles.buttons} onPress={()=>{push(7)}}><Text style={styles.text}> 7</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={()=>{push(8)}}><Text style={styles.text}> 8</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={()=>{push(9)}}><Text style={styles.text}> 9</Text></TouchableOpacity>
          </View>
          <View style={styles.lines}>
            <TouchableOpacity style={styles.buttons} onPress={()=>{push(4)}} ><Text style={styles.text} > 4</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={()=>{push(5)}}><Text style={styles.text} > 5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={()=>{push(6)}}><Text style={styles.text} > 6</Text></TouchableOpacity>
          </View>
          <View style={styles.lines}>
            <TouchableOpacity style={styles.buttons} onPress={()=>{push(1)}}><Text style={styles.text} > 1</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={()=>{push(2)}}><Text style={styles.text} > 2</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={()=>{push(3)}}><Text style={styles.text} > 3</Text></TouchableOpacity>
          </View>
          <View style={styles.lines}>
            <TouchableOpacity style={styles.buttons} onPress={()=>{push(0)}}><Text style={styles.text}> 0</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={()=>{push('.')}}><Text style={styles.text}> ,</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={Calcular} ><Text style={styles.text}> =</Text></TouchableOpacity>
          </View>
        </View>
        <View style={styles.simbolos}>
            <TouchableOpacity style={styles.buttons} onPress={clear}><Text style={styles.text}> C</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={()=>{push('/')}}><Text style={styles.text}> ÷</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={()=>{push('*')}}><Text style={styles.text}> X</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={()=>{push('-')}}><Text style={styles.text}> -</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={()=>{push('+')}}><Text style={styles.text}> +</Text></TouchableOpacity>
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
    backgroundColor: "#fff", 
    alignItems: "flex-end", 
    justifyContent: "center", 
    color: "#000", 
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
  }, 
  TextResult :{
    fontSize: 80, 
    color: "red"
  }
 
});
