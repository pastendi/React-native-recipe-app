import { StyleSheet, Image } from 'react-native'
import products from '@/assets/data/products'
import EditScreenInfo from '@/src/components/EditScreenInfo'
import { Text, View } from '@/src/components/Themed'
import Colors from '@/src/constants/Colors'
import ProductItem from '@/src/components/ProductItem'

export default function TabOneScreen() {
  return (
    <View>
      <ProductItem product={products[0]} />
      <ProductItem product={products[1]} />
    </View>
  )
}

const styles = StyleSheet.create({})
