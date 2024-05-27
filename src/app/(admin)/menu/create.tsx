import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

import Button from '@/src/components/Button'
import Colors from '@/src/constants/Colors'
import { Stack } from 'expo-router'
const defaultImage =
  'https://image.similarpng.com/very-thumbnail/2020/06/Pizza-logo-vector-PNG.png'
const create = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [errors, setErrors] = useState('')
  const [image, setImage] = useState('')

  const resetField = () => {
    setName('')
    setPrice('')
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  const validateInput = () => {
    setErrors('')
    if (!name) {
      setErrors('Name is required')
      return false
    }
    if (!price) {
      setErrors('Price is required')
      return false
    }
    if (isNaN(parseFloat(price))) {
      setErrors('Price is not a number')
      return false
    }
    return true
  }
  const onCreate = () => {
    if (!validateInput()) {
      return
    }

    resetField()
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Add new product' }} />
      <Image
        source={{
          uri: image || defaultImage,
        }}
        style={styles.image}
      />
      <Text onPress={pickImage} style={styles.imageSelectText}>
        Select Image
      </Text>
      <Text style={styles.label}>Product: </Text>
      <TextInput
        placeholder='name'
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Text style={styles.label}>Price: </Text>
      <TextInput
        placeholder='9.99'
        value={price}
        style={styles.input}
        onChangeText={setPrice}
        keyboardType='numeric'
      />
      <Text style={{ color: 'red' }}>{errors}</Text>
      <View style={styles.buttons}>
        <Button text='Reset' onPress={() => resetField()} />
        <Button text='Create' onPress={onCreate} />
      </View>
    </View>
  )
}

export default create

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: '50%',
    aspectRatio: 1,
    alignSelf: 'center',
  },
  imageSelectText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginTop: 20,
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
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
})
