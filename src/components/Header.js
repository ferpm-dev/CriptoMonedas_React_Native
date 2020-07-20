import React from 'react';
import {StyleSheet, Text, Platform, Dimensions} from 'react-native';
import {Colors} from '../colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Header = () => {
  return (
    <>
      <Text style={styles.txtHeader}>criptomonedas</Text>
    </>
  );
};

const styles = StyleSheet.create({
  txtHeader: {
    paddingTop: Platform.OS === 'ios' ? height * 0.07 : height * 0.012,
    paddingBottom: 12,
    backgroundColor: Colors.header,
    fontFamily: 'PlayfairDisplay-Italic',
    fontSize: height * 0.027,
    textAlign: 'center',
    letterSpacing: 10,
    color: Colors.white,
  },
});

export default Header;
