import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight,
  Alert,
  View,
} from 'react-native';
import {Colors} from '../colors';
import {Picker} from '@react-native-community/picker';
import axios from 'axios';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Form = ({
  currency,
  setCurrency,
  criptocurrency,
  setCriptocurrency,
  setQuestionAPI,
}) => {
  const [criptocurrencies, setCurrencies] = useState([]);

  useEffect(() => {
    const questionAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=40&tsym=USD';
      const result = await axios.get(url);
      setCurrencies(result.data.Data);
    };
    questionAPI();
  }, []);

  const getCurrency = (badge) => {
    setCurrency(badge);
    console.log(badge);
  };

  const getCriptocurrency = (cripto) => {
    setCriptocurrency(cripto);
  };

  const quotePrice = () => {
    if (currency.trim() === '' || criptocurrency.trim() === '') {
      showAlert();
      return;
    }
    setQuestionAPI(true);
  };

  const showAlert = () => {
    Alert.alert('Error..', 'Ambos campos son obligatorios', [{text: 'OK'}]);
  };

  return (
    <>
      <View style={styles.containForm}>
        <Picker
          selectedValue={currency}
          onValueChange={(badge) => getCurrency(badge)}
          itemStyle={styles.picker}>
          <Picker.Item label="-Seleccionar divisa-" value="" />
          <Picker.Item label="Dolar de Estados Unidos" value="USD" />
          <Picker.Item label="Euro" value="EUR" />
          <Picker.Item label="Libra Esterlina" value="GBP" />
          <Picker.Item label="Peso de Argentina" value="ARS" />
          <Picker.Item label="Peso de Mexico" value="MXN" />
          <Picker.Item label="Real de Brasil" value="BRL" />
          <Picker.Item label="Peso de Chile" value="CLP" />
          <Picker.Item label="Peso de Uruguay" value="UYU" />
          <Picker.Item label="Nuevo Sol Peruano" value="PEN" />
          <Picker.Item label="Guaraní de Paraguay" value="PYG" />
          <Picker.Item label="Dolar de Hong Kong" value="HKD" />
          <Picker.Item label="Yen de Japón" value="JPY" />
          <Picker.Item label="Rublo" value="RUB" />
        </Picker>

        <Picker
          selectedValue={criptocurrency}
          onValueChange={(cripto) => getCriptocurrency(cripto)}
          itemStyle={styles.picker}>
          <Picker.Item label="-Seleccionar cripto-" value="" />
          {criptocurrencies.map((cripto) => (
            <Picker.Item
              key={cripto.CoinInfo.Id}
              label={cripto.CoinInfo.FullName}
              value={cripto.CoinInfo.Name}
            />
          ))}
        </Picker>
        <TouchableHighlight
          style={styles.quoteBtn}
          onPress={() => quotePrice()}>
          <Text style={styles.quoteBtnTxt}>Cotizar</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  picker: {
    height: 140,
    backgroundColor: Colors.whiteWithTransparen,
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  quoteBtn: {
    backgroundColor: Colors.dark,
    padding: 9,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  quoteBtnTxt: {
    fontWeight: '600',
    letterSpacing: 9,
    color: Colors.white,
    fontSize: height * 0.019,
    textAlign: 'center',
  },
  containForm: {
    // paddingBottom: height / 50,
    width: width,
    // height: height,
    opacity: 1,
    // justifyContent: 'flex-end',
  },
});

export default Form;
