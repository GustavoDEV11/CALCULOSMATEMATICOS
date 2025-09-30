import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/splash.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Numbers Facts</Text>
      <Text style={styles.subtitle}>Fatos matemáticos interessantes</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
});