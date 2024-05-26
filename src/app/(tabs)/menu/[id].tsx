import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products, { defaultImage } from '@/assets/data/products'
import Button from '@/src/components/Button'
const sizes = ['S', 'M', 'L', 'XL']

const singleProduct = () => {
  const [selectedSize, setSelectedSize] = useState('M')
  const { id } = useLocalSearchParams()

  const addToCart = () => {}

  const product = products.find((x) => x.id.toString() === id)
  if (!product) return <Text>Product not found</Text>
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image
        source={{ uri: product.image || defaultImage }}
        style={styles.image}
      />
      <View style={styles.sizeContainer}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => setSelectedSize(size)}
            key={size}
            style={[
              styles.sizeStyle,
              {
                backgroundColor: size === selectedSize ? 'gainsboro' : 'white',
              },
            ]}
          >
            <Text style={styles.sizeText}>{size}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>Price: ${product.price}</Text>
      <Button text='Add to cart' onPress={addToCart} />
    </View>
  )
}

export default singleProduct

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  sizeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  sizeStyle: {
    width: 70,
    aspectRatio: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
