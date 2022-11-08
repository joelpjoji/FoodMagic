import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    setTimeout(() => SplashScreen.hide(), 3000);
  }, []);

  return (
    <View style={styles.sectionContainer}>
      <Text>Food Magic</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#39B54B',
  },
});

export default App;
