import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, Dimensions, View, Text} from 'react-native';
import {Colors} from './src/colors';
import axios from 'axios';

import Form from './src/components/Myform';
import Quote from './src/components/Quote';
import BackAnimate from './src/components/NewBackAnimation';

const App = () => {
  const [currency, setCurrency] = useState('');
  const [criptocurrency, setCriptocurrency] = useState('');
  const [questionAPI, setQuestionAPI] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    const quoteCriptocurrency = async () => {
      if (questionAPI) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptocurrency}&tsyms=${currency}`;
        const result = await axios.get(url);
        setResult(result.data.DISPLAY[criptocurrency][currency]);
        console.log(result.data.DISPLAY[criptocurrency][currency]);
        setQuestionAPI(false);
      }
    };
    quoteCriptocurrency();
  }, [criptocurrency, currency, questionAPI]);

  return (
    <View style={styles.back}>
      <BackAnimate />
      <View style={styles.contain}>
        <Quote result={result} />
        <Form
          currency={currency}
          setCurrency={setCurrency}
          criptocurrency={criptocurrency}
          setCriptocurrency={setCriptocurrency}
          setQuestionAPI={setQuestionAPI}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  back: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.orange,
    height: '100%',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  contain: {
    width: '100%',
  },
  text: {
    fontSize: 55,
  },
});
export default App;
