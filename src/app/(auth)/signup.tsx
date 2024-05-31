import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { Link, Stack } from 'expo-router'
import Button from '@/src/components/Button'
import Colors from '@/src/constants/Colors'
import { supabase } from '@/src/lib/supabase'

const signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')
  const [errors, setErrors] = useState('')
  const [loading, setLoading] = useState(false)
  const onSubmit = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) Alert.alert(error.message)
    setLoading(false)
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Sign-Up' }} />
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
      <Text style={styles.label}>Confirm Password: </Text>
      <TextInput
        placeholder=''
        value={cPassword}
        style={styles.input}
        secureTextEntry
        onChangeText={setCPassword}
      />
      <Text style={{ color: 'red' }}>{errors}</Text>
      <Button
        text={loading ? 'Creating...' : 'Sign-Up'}
        disabled={loading}
        onPress={onSubmit}
      />
      <Link
        href={'/signin'}
        style={{ textAlign: 'center', marginTop: 10, color: Colors.light.tint }}
      >
        I already have account
      </Link>
    </View>
  )
}

export default signup

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
