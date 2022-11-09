import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const RecipeScreen = props => {
  const {route} = props;
  const {params} = route;
  const {item} = params;
  const {name, ingredients,instruction,rate} = item;

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View >
        <Text >{name}</Text>
      </View>
      <View>
        <Text >{ingredients}</Text>
      </View>
      <View >
        <Text >{instruction}</Text>
      </View>
      <View>
        <Text >{rate}</Text>
      </View>
      <Button
      title="Home "
      onPress={() =>
        navigation.navigate('Home', { name: 'Jane' })
      }
    />
    </View>
  );
};


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default RecipeScreen;
