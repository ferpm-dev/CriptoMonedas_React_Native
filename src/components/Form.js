import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Dimensions} from 'react-native';
import {Colors} from '../colors';
import {Picker} from '@react-native-community/picker';
import axios from 'axios';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Form = () => {
  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [criptomonedas, guardarCriptomonedas] = useState([]);

  useEffect(() => {
    const questionAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const result = await axios.get(url);
      guardarCriptomonedas(result.data.Data);
    };
    questionAPI();
  }, []);

  const obtenerMoneda = (moneda) => {
    guardarMoneda(moneda);
  };

  const obtenerCriptoMoneda = (cripto) => {
    guardarCriptomoneda(cripto);
  };

  return (
    <>
      <Text style={styles.txtForm}>Moneda</Text>
      <Picker
        selectedValue={moneda}
        onValueChange={(moneda) => obtenerMoneda(moneda)}
        itemStyle={styles.picker}>
        <Picker.Item label="-Seleccione-" value="" />
        <Picker.Item label="Dolar de Estados Unidos" value="USD" />
        <Picker.Item label="Peso Argentino" value="ARS" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
      </Picker>

      <Text style={styles.txtForm}>CriptoMoneda</Text>
      <Picker
        selectedValue={criptomoneda}
        onValueChange={(cripto) => obtenerCriptoMoneda(cripto)}
        itemStyle={styles.picker}>
        <Picker.Item label="-Seleccione-" value="" />
        {criptomonedas.map((cripto) => (
          <Picker.Item
            key={cripto.CoinInfo.Id}
            label={cripto.CoinInfo.FullName}
            value={cripto.CoinInfo.Name}
          />
        ))}
      </Picker>
    </>
  );
};

const styles = StyleSheet.create({
  txtForm: {
    fontFamily: 'PlayfairDisplay-Bold',
    textTransform: 'uppercase',
    letterSpacing: 5,
    backgroundColor: Colors.black,
    color: Colors.white,
    fontSize: height * 0.014,
    textAlign: 'center',
    padding: '2%',
    // marginTop: height * 0.01,
  },
  picker: {
    height: 120,
    backgroundColor: Colors.whiteWithTransparen,
  },
});

export default Form;
