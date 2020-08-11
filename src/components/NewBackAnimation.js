import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View, Easing} from 'react-native';

import {Colors} from '../colors';

const MyLoop = () => {
  const scale = useRef(new Animated.Value(0)).current;

  const rotateInLoop = scale.interpolate({
    inputRange: [0, 1],
    outputRange: ['360deg', '0deg'],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(scale, {
        toValue: 1,
        duration: 700000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();
  }, [scale]);

  return (
    <View style={styles.cont1}>
      <Animated.Image
        source={require('../assets/img/ruedaCriptoGuidesExWeb3500.gif')}
        style={[
          styles.img,
          {
            transform: [{rotate: rotateInLoop}],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cont1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
    opacity: 1,
  },
  cont3: {
    height: 40,
    width: 40,
    backgroundColor: Colors.black,
  },
  img: {
    marginTop: 3000,
    width: 3500,
    height: 3500,
    resizeMode: 'contain',
    opacity: 0.8,
  },
  //   img: {
  //     position: 'absolute',
  //     top: 100,
  //     width: 3500,
  //     height: 3500,
  //     resizeMode: 'contain',
  //     opacity: 0.8,
  //   },
});

export default MyLoop;
