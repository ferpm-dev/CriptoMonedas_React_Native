import React from 'react';
import {Text, StyleSheet, Dimensions, View} from 'react-native';
import {Colors} from '../colors';

const height = Dimensions.get('window').height;

const Quote = ({result}) => {
  if (Object.keys(result).length === 0) {
    return null;
  } else {
    return (
      <View style={styles.cardQuote}>
        <Text>
          <Text style={styles.quote}>{result.PRICE}</Text>
        </Text>
        <Text style={styles.titQuote}>
          El precio más alto del día:{'   '}
          <Text style={[styles.titQuote, styles.bold]}>{result.HIGHDAY}</Text>
        </Text>
        <Text style={styles.titQuote}>
          El precio más bajo del día:{'   '}
          <Text style={[styles.titQuote, styles.bold]}>{result.LOWDAY}</Text>
        </Text>
        <Text style={styles.titQuote}>
          La variación en las últimas 24 horas:{'   '}
          <Text style={[styles.titQuote, styles.bold]}>
            {result.CHANGEPCT24HOUR}
            {'%'}
          </Text>
        </Text>
        <Text style={styles.titQuote}>
          Última actualización:{'   '}
          <Text style={[styles.titQuote, styles.bold]}>
            {result.LASTUPDATE}
          </Text>
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  cardQuote: {
    justifyContent: 'space-between',
    // alignItems: 'center',
    borderRadius: 10,
    width: '100%',
    // height: 130,
    backgroundColor: Colors.dark,
    // opacity: 0.4,
    paddingTop: 25,
    paddingBottom: 19,
    paddingHorizontal: 19,
    marginVertical: 5,
  },

  titQuote: {
    fontSize: height * 0.015,
    textAlign: 'right',
    letterSpacing: 0.8,
    color: Colors.white,
    textShadowColor: Colors.black,
    textShadowRadius: 25,
    fontWeight: '500',
    marginTop: 15,
  },
  quote: {
    fontSize: height * 0.06,
    textAlign: 'right',
    letterSpacing: 1,
    color: Colors.white,
    fontWeight: '200',
    textShadowColor: Colors.black,
    textShadowRadius: 35,
  },
  bold: {
    fontWeight: '800',
  },
});
export default Quote;
