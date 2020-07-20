import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Platform,
  Dimensions,
  View,
} from 'react-native';
import Header from './src/components/Header.js';
import Form from './src/components/Form.js';
import {Colors} from './src/colors/index.js';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const App = () => {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <Header />
      <Image
        style={styles.image}
        source={require('./src/assets/img/cripto.jpg')}
      />
      <View style={styles.contain}>
        <Form />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  image: {
    width: width,
    // resizeMode: 'contain',
    // marginTop: 0,
    height: 270,
  },
  contain: {
    marginHorizontal: '2,5%',
  },
});
export default App;
