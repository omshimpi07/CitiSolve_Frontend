// screens/UserLogin.jsx
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import AuthForm from '../components/AuthForm';

export default function UserLogin({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <AuthForm
        type="login"
        role="User"
        onSubmit={() => navigation.replace('UserDrawer')}
      />

      {/* 👇 Add the Register link here */}
      <TouchableOpacity onPress={() => navigation.navigate('UserRegister')}>
        <Text style={{ textAlign: 'center', marginTop: 10, color: '#007bff' }}>
          No account? Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}
