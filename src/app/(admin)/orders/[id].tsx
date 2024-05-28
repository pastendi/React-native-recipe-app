import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import orders from '@/assets/data/orders'
import OrderListItem from '@/src/components/OrderListItem'
import OrderItem from '@/src/components/OrderItem'
import { OrderStatusList } from '@/src/types'
import Colors from '@/src/constants/Colors'

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
        ListFooterComponent={() => (
          <>
            <Text style={{ fontWeight: 'bold' }}>Status</Text>
            <View style={{ flexDirection: 'row', gap: 5 }}>
              {OrderStatusList.map((status) => (
                <Pressable
                  key={status}
                  onPress={() => console.warn('Update status')}
                  style={[
                    styles.statusStyle,
                    {
                      backgroundColor:
                        order.status === status
                          ? Colors.light.tint
                          : 'transparent',
                    },
                  ]}
                >
                  <Text
                    style={{
                      color:
                        order.status === status ? 'white' : Colors.light.tint,
                    }}
                  >
                    {status}
                  </Text>
                </Pressable>
              ))}
            </View>
          </>
        )}
      />
    </View>
  )
}

export default OrderDetails

const styles = StyleSheet.create({
  statusStyle: {
    borderColor: Colors.light.tint,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
})
