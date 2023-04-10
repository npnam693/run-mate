import React, { useRef, useEffect, useState } from 'react';
import { Animated, StyleSheet, View, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

export default function App() {
  const animation = useRef(null);
    const [widthH, setWidthH] = useState(Dimensions.get('window').width - 300)
    
    setTimeout(() => setWidthH(Dimensions.get('window').width+300), 500)

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: widthH,
        //   height: 200,
          backgroundColor: '#eee',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../assets/lottie/running-men.json')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});