import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { OrderItem } from '../types'
import { defaultImage } from '@/assets/data/products'
import { FontAwesome } from '@expo/vector-icons'
import { useCart } from '../providers/CartProvider'
import Colors from '../constants/Colors'

type OrderItemProps = {
  orderItem: OrderItem
}

const SingleOrderItem = ({ orderItem }: OrderItemProps) => {
  const { updateQauntity } = useCart()
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: orderItem.products.image || defaultImage }}
        style={styles.image}
        resizeMode='contain'
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{orderItem.products.name}</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.price}>
            ${orderItem.products.price.toFixed(2)}
          </Text>
          <Text>Size: {orderItem.size}</Text>
        </View>
      </View>
    </View>
  )
}

export default SingleOrderItem

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 50,
    aspectRatio: 1,
    marginRight: 10,
  },
  subtitleContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    color: Colors.light.tint,
  },
  quanititySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  quantity: {
    fontWeight: 'bold',
  },
})
