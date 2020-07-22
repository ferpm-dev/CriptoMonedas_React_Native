import React from 'react';
import {StyleSheet, Text, Platform, Dimensions} from 'react-native';
import {Colors} from '../colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Header = () => {
  return (
    <>
      <Text style={styles.txtHeader}>criptobank</Text>
    </>
  );
};

const styles = StyleSheet.create({
  txtHeader: {
    paddingTop: Platform.OS === 'ios' ? height * 0.07 : height * 0.012,
    paddingBottom: 15,
    backgroundColor: Colors.header,
    fontFamily: 'PlayfairDisplay-Italic',
    fontSize: height * 0.024,
    textAlign: 'center',
    letterSpacing: 14,
    color: Colors.white,
  },
});

export default Header;
