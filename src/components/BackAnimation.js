import React, {useEffect, useRef} from 'react';
import {
  Animated,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Easing,
} from 'react-native';

import {Colors} from '../NewAppScreen';

const App = () => {
  const position = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const positionBack = useRef(new Animated.ValueXY({x: 0, y: 870})).current;
  const scale = useRef(new Animated.Value(0.4)).current;

  const rotate = position.y.interpolate({
    inputRange: [130, 260],
    outputRange: ['0deg', '720deg'],
  });

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

  function rotateUp() {
    Animated.timing(position, {
      toValue: {x: 0, y: -260},
      duration: 3000,
      useNativeDriver: true,
      easing: Easing.elastic(1),
    }).start();
  }

  function rotateDown() {
    Animated.timing(position, {
      toValue: {x: 0, y: 390},
      duration: 3000,
      useNativeDriver: true,
      easing: Easing.elastic(1),
    }).start();
  }

  function inTheMiddle() {
    Animated.timing(position, {
      toValue: {x: 0, y: 0},
      duration: 3000,
      useNativeDriver: true,
      easing: Easing.elastic(1),
    }).start();
  }

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
      <Animated.View
        style={[
          styles.cont2,
          {
            transform: [
              {translateY: position.y},
              {rotate: rotate},
              {perspective: 1000},
            ],
          },
        ]}>
        <Text style={styles.sec}>type</Text>
      </Animated.View>
      <TouchableOpacity style={styles.btn} onPress={rotateUp}>
        <Text style={styles.secBtn}> Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={inTheMiddle}>
        <Text style={styles.secBtn}> Middle</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={rotateDown}>
        <Text style={styles.secBtn}> Down</Text>
      </TouchableOpacity>
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
  cont2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 100,
    borderRadius: 6,
    backgroundColor: Colors.orange,
    opacity: 0.6,
  },
  secBtn: {
    fontSize: 12,
    letterSpacing: 6,
    fontWeight: '600',
    color: Colors.white,
  },
  sec: {
    fontSize: 272,
    letterSpacing: -12,
    fontWeight: '100',
    color: Colors.white,
    opacity: 0.4,
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
