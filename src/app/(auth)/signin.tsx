import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Link, Stack } from 'expo-router'
import Button from '@/src/components/Button'
import Colors from '@/src/constants/Colors'

const signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')
  const onSubmit = () => {}
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Sign-In' }} />
      <Text style={styles.label}>Email: </Text>
      <TextInput
        placeholder='john@gmail.com'
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Text style={styles.label}>Password: </Text>
      <TextInput
        placeholder=''
        value={password}
        style={styles.input}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Text style={{ color: 'red' }}>{errors}</Text>
      <Button text='Sign-In' onPress={onSubmit} />
      <Link
        href={'/signup'}
        style={{ textAlign: 'center', marginTop: 10, color: Colors.light.tint }}
      >
        Create new account
      </Link>
    </View>
  )
}

export default signin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  label: {
    color: 'gray',
    fontSize: 16,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 7,
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
  },
})
