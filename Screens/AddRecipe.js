import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Dimensions} from 'react-native';

// screen sizing
const {width, height} = Dimensions.get('window');

const AddRecipeScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState([]);
  const [instruction, setInstruction] = useState([]);
  const [ingredients, setIngredients] = useState(initialElements);

  const [initialElements, changeEl] = useState([]);

  const [idx, incr] = useState(2);

  const addElement = () => {
    var newArray = [
      ...initialElements,
      {id: idx, text: ingredients + (idx + 1)},
    ];
    incr(idx + 1);
    console.log(initialElements.length);
    setIngredients(newArray);
    changeEl(newArray);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.name}>Add Recipe</Text>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={setName}
            value={name}
            placeholder="Recipe name"
          />
          <TextInput
            style={styles.innercontainer2}
            onChangeText={setInstruction}
            value={instruction}
            placeholder="Instruction"
            numberOfLines={10}
          />

        <Text style={styles.name}>Ingredients</Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={setIngredients}
          value={ingredients}
          placeholder="Ingredients"
        />
          <FlatList
            keyExtractor={item => item.id}
            key={item => item.id}
            data={ingredients}
            renderItem={item => <Text>{item.item.text}</Text>}
          />
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={addElement}
            activeOpacity={0.7}
            style={styles.button}>
            <Text style={styles.buttonText}> Add More Ingredients </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            activeOpacity={0.7}
            style={styles.button}>
            <Text style={styles.buttonText}> Submit For Evaluvation </Text>
          </TouchableOpacity>
          </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius:10,
    margin: 15,
    width: width /1.09,
    height: height,
    shadowColor: 'rgba(0,0,0, 0)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
    fontFamily: 'VarelaRound-regular',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 2,

  },
  name: {
    fontSize: 30,
    fontWeight: 'normal',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'VarelaRound-regular',
  },

  innercontainer2: {
    textAlign: 'center',
    height: 150,
    width: '85%',
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 7,
    marginTop: 15,
    marginEnd:20,
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '85%',
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 7,
    marginTop: 12,
  },
  button: {
    width: '70%',
    height: 40,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default AddRecipeScreen;
