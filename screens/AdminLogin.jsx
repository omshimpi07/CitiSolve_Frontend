// screens/AdminLogin.jsx
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import AuthForm from '../components/AuthForm';

export default function AdminLogin({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <AuthForm
        type="login"
        role="Admin"
        onSubmit={() => navigation.replace('AdminDrawer')}
      />

      {/* 👇 Add the Register link here */}
      <TouchableOpacity onPress={() => navigation.navigate('AdminRegister')}>
        <Text style={{ textAlign: 'center', marginTop: 10, color: '#007bff' }}>
          No account? Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}
