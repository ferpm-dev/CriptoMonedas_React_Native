import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {Colors} from '../colors';
import {Picker} from '@react-native-community/picker';
import axios from 'axios';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Form = () => {
  const [currency, setCurrency] = useState('');
  const [criptocurrency, setCriptocurrency] = useState('');
  const [criptocurrencies, setCurrencies] = useState([]);

  useEffect(() => {
    const questionAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const result = await axios.get(url);
      setCurrencies(result.data.Data);
    };
    questionAPI();
  }, []);

  const getCurrency = (currency) => {
    setCurrency(currency);
  };

  const getCriptocurrency = (cripto) => {
    setCriptocurrency(cripto);
  };

  const quotePrice = () => {
    if (currency.trim() === '' || criptocurrency.trim() === '') {
      showAlert();
      return;
    }
  };

  const showAlert = () => {
    Alert.alert('Error..', 'Ambos campos son obligatorios', [{text: 'OK'}]);
  };

  return (
    <>
      <Text style={styles.txtForm}>Divisa</Text>
      <Picker
        selectedValue={currency}
        onValueChange={(currency) => getCurrency(currency)}
        itemStyle={styles.picker}>
        <Picker.Item label="-Seleccione-" value="" />
        <Picker.Item label="Dolar de Estados Unidos" value="USD" />
        <Picker.Item label="Peso Argentino" value="ARS" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
      </Picker>

      <Text style={styles.txtForm2}>criptomoneda</Text>
      <Picker
        selectedValue={criptocurrency}
        onValueChange={(cripto) => getCriptocurrency(cripto)}
        itemStyle={styles.picker}>
        <Picker.Item label="-Seleccione-" value="" />
        {criptocurrencies.map((cripto) => (
          <Picker.Item
            key={cripto.CoinInfo.Id}
            label={cripto.CoinInfo.FullName}
            value={cripto.CoinInfo.Name}
          />
        ))}
      </Picker>
      <TouchableHighlight style={styles.quoteBtn} onPress={() => quotePrice()}>
        <Text style={styles.quoteBtnTxt}>Cotizar</Text>
      </TouchableHighlight>
    </>
  );
};

const styles = StyleSheet.create({
  txtForm: {
    marginTop: height * 0.35,
    fontFamily: 'PlayfairDisplay-Bold',
    textTransform: 'uppercase',
    letterSpacing: 5,
    backgroundColor: Colors.black,
    color: Colors.white,
    fontSize: height * 0.016,
    textAlign: 'center',
    padding: '2%',
    // marginTop: height * 0.01,
  },
  txtForm2: {
    fontFamily: 'PlayfairDisplay-Bold',
    textTransform: 'uppercase',
    letterSpacing: 5,
    backgroundColor: Colors.black,
    color: Colors.white,
    fontSize: height * 0.016,
    textAlign: 'center',
    padding: '2%',
  },
  picker: {
    height: 120,
    backgroundColor: Colors.whiteWithTransparen,
  },
  quoteBtn: {
    backgroundColor: Colors.dark,
    padding: 10,
    marginTop: 10,
  },
  quoteBtnTxt: {
    fontFamily: 'PlayfairDisplay-Bold',
    textTransform: 'uppercase',
    letterSpacing: 5,
    color: Colors.black,
    fontSize: height * 0.016,
    textAlign: 'center',
  },
});

export default Form;
