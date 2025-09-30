import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NumbersApiResponse } from '../services/api';

interface Props {
  fact: NumbersApiResponse;
}

const NumberCard: React.FC<Props> = ({ fact }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.number}>Número: {String(fact.number)}</Text>
      <Text style={styles.text}>{fact.text}</Text>
      <Text style={styles.meta}>Tipo: {fact.type} • Encontrado: {fact.found ? 'Sim' : 'Não'}</Text>
    </View>
  );
};

export default NumberCard;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 3,
  },
  number: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  meta: {
    fontSize: 12,
    color: '#666',
  },
});