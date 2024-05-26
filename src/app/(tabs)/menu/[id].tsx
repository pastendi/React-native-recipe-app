import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const singleProduct = () => {
  const { id } = useLocalSearchParams()
  return (
    <View>
      <Stack.Screen options={{ title: 'Product details' }} />
      <Text>singleProduct {id}</Text>
    </View>
  )
}

export default singleProduct
