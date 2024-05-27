import { StyleSheet, Image, FlatList, Pressable } from 'react-native'
import products from '@/assets/data/products'
import EditScreenInfo from '@/src/components/EditScreenInfo'
import { Text, View } from '@/src/components/Themed'
import Colors from '@/src/constants/Colors'
import ProductItem from '@/src/components/ProductItem'
import { Link, Stack } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

export default function MenuScreen() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: 'Menu',
          headerRight: () => (
            <Link href='(admin)/menu/create' asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name='plus-square-o'
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
