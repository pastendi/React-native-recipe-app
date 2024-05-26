import { StyleSheet, Image, FlatList } from 'react-native'
import products from '@/assets/data/products'
import EditScreenInfo from '@/src/components/EditScreenInfo'
import { Text, View } from '@/src/components/Themed'
import Colors from '@/src/constants/Colors'
import ProductItem from '@/src/components/ProductItem'
import { Stack } from 'expo-router'

export default function MenuScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: 'Menu' }} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ padding: 10, gap: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  )
}
