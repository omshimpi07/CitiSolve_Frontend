// screens/ContractorLogin.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function ContractorLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Missing', 'Enter email and password');
      return;
    }
    // In frontend-only demo, accept any credentials
    navigation.replace('ContractorDrawer');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contractor Login</Text>
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
      <TextInput placeholder="Password" style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
      <CustomButton title="Login" color="#0ea5e9" onPress={handleLogin} />
      <CustomButton title="Register" color="#6366f1" onPress={() => navigation.navigate('ContractorRegister')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f1f5f9' },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 20, textAlign: 'center' },
  input: { backgroundColor: '#fff', padding: 12, borderRadius: 10, marginBottom: 12, borderWidth: 1, borderColor: '#ddd' },
});
