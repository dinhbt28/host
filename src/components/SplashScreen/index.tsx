import React from 'react';
import { SafeAreaView } from 'react-native';
import { MD3Colors, ProgressBar, Text } from 'react-native-paper';

import styles from './styles';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Host application is loading. Please wait...
      </Text>
      <ProgressBar
        style={styles.progress}
        indeterminate
        color={MD3Colors.primary50}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;
