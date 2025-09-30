import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { fetchRandomFact, NumbersApiResponse } from '../services/api';
import NumberCard from '../components/NumberCard';

const HomeScreen: React.FC = () => {
  const [fact, setFact] = useState<NumbersApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const loadFact = async () => {
    try {
      setLoading(true);
      const data = await fetchRandomFact();
      setFact(data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível obter o fato.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFact();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fato aleatório sobre números</Text>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : fact ? (
        <NumberCard fact={fact} />
      ) : (
        <Text style={styles.empty}>Nenhum fato disponível.</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={loadFact} accessibilityRole="button">
        <Text style={styles.buttonText}>Carregar outro fato</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f9fafb',
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 12,
    marginBottom: 18,
  },
  empty: {
    fontSize: 16,
    color: '#444',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1f6feb',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});