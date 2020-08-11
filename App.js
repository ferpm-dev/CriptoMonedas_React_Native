import React, {useState, useEffect} from 'react';
import {StatusBar, StyleSheet, Dimensions, View} from 'react-native';
import Quote from './src/components/Quote.js';
import Form from './src/components/Form.js';
import {Colors} from './src/colors/index.js';
import BackAnimation from './src/components/NewBackAnimation.js';
import axios from 'axios';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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
        setQuestionAPI(false);
      }
    };
    quoteCriptocurrency();
  }, [criptocurrency, currency, questionAPI]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.back}>
        <BackAnimation />
        <View style={styles.containQuote}>
          <Quote result={result} />
          <Form
            currency={currency}
            criptocurrency={criptocurrency}
            setCurrency={setCurrency}
            setCriptocurrency={setCriptocurrency}
            setQuestionAPI={setQuestionAPI}
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  back: {
    width: width,
    position: 'absolute',
    backgroundColor: 'black', // resizeMode: 'contain',
    // marginTop: 0,
    height: height,
  },
  containForm: {
    borderRadius: 10,
    // marginTop: height / 12,
    width: width,
    height: height / 2,
    opacity: 1,
  },
  containQuote: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    opacity: 1,
    paddingBottom: height / 18,
    marginHorizontal: 20,
  },
});
export default App;
