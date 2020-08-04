import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View, Easing} from 'react-native';

import {Colors} from '../colors';

const App = () => {
  const positionBack = useRef(new Animated.ValueXY({x: 0, y: 870})).current;
  const scale = useRef(new Animated.Value(0.4)).current;

  const rotateBack = positionBack.y.interpolate({
    inputRange: [10, 40],
    outputRange: ['40deg', '120deg'],
  });

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.6,
        duration: 700,
        useNativeDriver: true,
        easing: Easing.elastic(1),
      }),
      Animated.timing(scale, {
        toValue: 1.6,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.bounce,
      }),
      Animated.timing(positionBack, {
        toValue: {x: 0, y: 0},
        duration: 8000000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ]).start();
  }, [scale, positionBack]);

  return (
    <View style={styles.cont1}>
      <Animated.Image
        source={require('../assets/img/ruedaCripto.gif')}
        style={[
          styles.img,
          {
            transform: [
              {translateY: positionBack.y},
              {rotate: rotateBack},
              {scale: scale},
              {perspective: 1000},
            ],
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
  },
  img: {
    position: 'absolute',
    width: 2000,
    height: 2000,
    resizeMode: 'contain',
    opacity: 0.4,
  },
});

export default App;
