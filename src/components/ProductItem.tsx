import { StyleSheet, Image } from 'react-native'
import { Text, View } from '@/src/components/Themed'
import Colors from '@/src/constants/Colors'
import { Product } from '../types'

const defaultImage =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/6cheese.png'
type ProductItemProps = {
  product: Product
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image || defaultImage }}
        style={styles.image}
        resizeMode='contain'
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  )
}
export default ProductItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dce4ff',
    padding: 10,
    borderRadius: 10,
    // takes as much space as it can according to flatlist column number of item
    flex: 1,
    maxWidth: '50%', //does not let last single item to take whole width
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
})
