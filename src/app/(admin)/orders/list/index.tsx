import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import orders from '@/assets/data/orders'
import OrderListItem from '@/src/components/OrderListItem'

const index = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Active' }} />
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
        contentContainerStyle={{ gap: 10, padding: 10 }}
      />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
})
