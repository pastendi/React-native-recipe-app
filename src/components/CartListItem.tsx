import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { CartItem } from '../types'
import { defaultImage } from '@/assets/data/products'
import { FontAwesome } from '@expo/vector-icons'
import { useCart } from '../providers/CartProvider'
import Colors from '../constants/Colors'

type CartItemProps = {
  cartItem: CartItem
}

const CartListItem = ({ cartItem }: CartItemProps) => {
  const { updateQauntity } = useCart()
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: cartItem.product.image || defaultImage }}
        style={styles.image}
        resizeMode='contain'
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{cartItem.product.name}</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.price}>${cartItem.product.price.toFixed(2)}</Text>
          <Text>Size: {cartItem.size}</Text>
        </View>
      </View>
      <View style={styles.quanititySelector}>
        <FontAwesome
          onPress={() => updateQauntity(cartItem.id, -1)}
          name='minus'
          color='gray'
          style={{ padding: 5 }}
        />
        <Text style={styles.quantity}>{cartItem.quantity}</Text>
        <FontAwesome
          onPress={() => updateQauntity(cartItem.id, 1)}
          name='plus'
          color='gray'
          style={{ padding: 5 }}
        />
      </View>
    </View>
  )
}

export default CartListItem

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
