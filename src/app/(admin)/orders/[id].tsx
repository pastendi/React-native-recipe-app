import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import orders from '@/assets/data/orders'
import OrderListItem from '@/src/components/OrderListItem'
import OrderItem from '@/src/components/OrderItem'

const OrderDetails = () => {
  const { id } = useLocalSearchParams()
  const order = orders.find((x) => x.id.toString() === id)
  if (!order) return <Text>Order not found</Text>
  return (
    <View style={{ padding: 10, gap: 20 }}>
      <Stack.Screen options={{ title: `Order #${id}` }} />
      <OrderListItem order={order} />
      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderItem orderItem={item} />}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  )
}

export default OrderDetails
