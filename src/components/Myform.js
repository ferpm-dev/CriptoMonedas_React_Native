import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Alert,
  Dimensions,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import axios from 'axios';
import {Colors} from '../colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Form = ({
  currency,
  setCurrency,
  criptocurrency,
  setCriptocurrency,
  setQuestionAPI,
}) => {
  const [criptocurrencies, setCriptocurrencies] = useState([]);

  useEffect(() => {
    const questionAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=40&tsym=USD';
      const result = await axios.get(url);
      setCriptocurrencies(result.data.Data);
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

  const cotizarPrecio = () => {
    if (currency.trim() === '' || criptocurrency.trim() === '') {
      showAlert();
      return;
    }
    setQuestionAPI(true);
  };

  const showAlert = () => {
    Alert.alert('Error...', 'Ambos campos son obligatorios', [{text: 'Ok'}]);
  };

  return (
    <>
      <View style={styles.contPicker}>
        <Picker
          itemStyle={styles.picker}
          selectedValue={currency}
          onValueChange={(badge) => getCurrency(badge)}>
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
      </View>
      <View style={styles.contPicker}>
        <Picker
          itemStyle={styles.picker}
          selectedValue={criptocurrency}
          onValueChange={(cripto) => getCriptocurrency(cripto)}>
          <Picker.Item label="Seleccione Criptomoneda" value="" />
          {criptocurrencies.map((cripto) => (
            <Picker.Item
              key={cripto.CoinInfo.Id}
              label={cripto.CoinInfo.FullName}
              value={cripto.CoinInfo.Name}
            />
          ))}
        </Picker>
      </View>

      <TouchableHighlight style={styles.btn} onPress={() => cotizarPrecio()}>
        <Text style={styles.txtBtn}>Cotizar</Text>
      </TouchableHighlight>
    </>
  );
};

const styles = StyleSheet.create({
  contPicker: {
    width: '100%',
    opacity: 1,
  },
  picker: {
    width: '100%',
    height: height * 0.16,
    backgroundColor: Colors.whiteWithTransparen,
    borderRadius: 6,
    marginVertical: 5,
  },
  btn: {
    marginVertical: 5,
    width: '100%',
    backgroundColor: Colors.black,
    justifyContent: 'center',
    borderRadius: 5,
  },
  txtBtn: {
    padding: 6,
    fontSize: 22,
    color: Colors.white,
    fontWeight: '400',
    letterSpacing: 2,
    textAlign: 'center',
  },
});
export default Form;
