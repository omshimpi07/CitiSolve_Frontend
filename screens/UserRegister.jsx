// screens/UserRegister.jsx
import React from 'react';
import AuthForm from '../components/AuthForm';

export default function UserRegister({ navigation }) {
  return (
    <AuthForm
      type="register"
      role="User"
      onSubmit={() => navigation.replace('UserDrawer')}
    />
  );
}
