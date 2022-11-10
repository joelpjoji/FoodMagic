import React from 'react';
import data from '../data';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  TouchableOpacity
} from ,react-native';
import { useState, useRef} from 'react';
import { useNavigation } from '@react-navigation/native';

let nxting = 0

const AddRecipeScreen = () => {
  const navigation = useNavigation();

  
  const [Data, setData] = useState(data)
  //const [id, setId] = useState('')  
  const [name, setName] = useState('') 
  const [image, setImage] = useState('') 
  const [ingredients, setIngredients] = useState([]) 
   const [rate, setRate] = useState('') 
   const [instruction, setInstruction] = useState('') 
   const [textValue, setTextValue] = useState('');
   const refInputs = useRef<string[]>([textValue]);

   const addInput = () => {
    refInputs.current.push('');
    //setNumInputs(value => value + 1);
  };

  const Add = ()=>{
    var values = {
      id: id,
      name: name,
      image: image,
      ingredients: ingredients,
      instruction: instruction,
      rate: rate
    }

    //setData([...data, values])
      
  }

    
   

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View>
       <Text>AddRecipe Screen</Text>

       <View>
          <Text style={styles.name}>Add Recipe</Text>
       </View>

       <View>
        
            <TextInput style={styles.innercontainer}
            value={name}
            onChange = {(e)=>{setName(name)}}
            placeholder='Recipe name' />

          <TextInput style={styles.innercontainer}
            value = {instruction} 
            onChange = {(e)=>{setInstruction}}
           placeholder='Instruction' />
          

           <TextInput style={styles.innercontainer}
            value = {image} 
            onChange = {(e)=>{setImage(image)}}
           placeholder='Image url' />
            
          <TextInput style={styles.innercontainer}
           onChange = {(e)=>{setRate(rate)}}
           value={rate} 
           placeholder='Rating' />
           
          
          <Text style={styles.name}>Ingredients</Text>
          
        <TouchableOpacity style={styles.fb} onPress={addInput}>
          <Text style={{fontSize: 38, color: 'white'}}>+</Text>
        </TouchableOpacity>

        

        <Button 
        onPress={()=>Add()}
        title = 'Add'/>
        </View>
        
    <Button
    title="Home "
    onPress={() =>
      navigation.navigate('Home',{ name: 'Jane' })
    }
  />
  </View></ScrollView>
       
  </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'flex-start',
    //justifyContent: 'flex-start',
    marginStart: 20,
    marginTop: 50,
    marginRight: 20,
  },
    header: {
        fontSize: 25,
        color: 'blue',
       
    },
    name: {
      fontSize: 20,
      color: 'black',
      marginTop: 20,
      marginBottom: 10,
      
    },
    innercontainer:{
      padding: 10,
      borderColor: 'black',
      borderWidth: 1,
      marginTop: 10,
    },
    button:{
      marginTop: 200,
      
    },
    ingredname: {
      position: 'relative',
      fontSize: 20,
      color: 'black',
      marginTop: 20,
      marginBottom: 10,
      
    },
    ingredbutton: {
      position: 'absolute',
    },
    ingred: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    },
    fb: {
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.2)',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      bottom: 30,
      right: 30,
      alignSelf: 'flex-end',
      backgroundColor: 'blue',
      borderRadius: 100,
      elevation: 8,
    },


    
    
});

export default AddRecipeScreen;
