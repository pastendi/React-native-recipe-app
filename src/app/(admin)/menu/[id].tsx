import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Link, Stack, useLocalSearchParams } from 'expo-router'
import products, { defaultImage } from '@/assets/data/products'
import Button from '@/src/components/Button'
import { useCart } from '@/src/providers/CartProvider'
import { PizzaSize } from '@/src/types'
import { FontAwesome } from '@expo/vector-icons'
import Colors from '@/src/constants/Colors'
const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL']

const singleProduct = () => {
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M')
  const { addItem } = useCart()
  const { id } = useLocalSearchParams()
  const product = products.find((x) => x.id.toString() === id)
  if (!product) return <Text>Product not found</Text>
  const addToCart = () => {
    if (!product) {
      return
    }
    addItem(product, selectedSize)
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: product?.name,
          headerRight: () => (
            <Link href='/' asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name='pencil'
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Image
        source={{ uri: product.image || defaultImage }}
        style={styles.image}
      />
      <Text style={styles.title}>Name:{product.name}</Text>
      <Text style={styles.price}>Price: ${product.price}</Text>
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
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  price: {
    fontSize: 18,
  },
})
