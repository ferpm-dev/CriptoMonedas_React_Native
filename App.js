import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Platform,
  Dimensions,
  View,
  ImageBackground,
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
      {/* <Image
        style={styles.image}
        source={require('./src/assets/img/backAnimate.png')}
      /> */}
      <ImageBackground
        source={require('./src/assets/img/criptoDarkC.jpg')}
        style={styles.contain}>
        <Form />
      </ImageBackground>
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
    width: width,
    height: height - 50,
    resizeMode: 'cover',
    opacity: 0.9,
  },
});
export default App;
