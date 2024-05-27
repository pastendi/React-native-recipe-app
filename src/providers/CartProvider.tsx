import { PropsWithChildren, createContext, useContext, useState } from 'react'
import { CartItem, Product } from '../types'
import { randomUUID } from 'expo-crypto'

type CartType = {
  items: CartItem[]
  addItem: (product: Product, size: CartItem['size']) => void
  updateQauntity: (itemId: string, amount: -1 | 1) => void
  total: number
}

const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQauntity: () => {},
  total: 0,
})

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([])

  //  increase  quanitity if already exists

  const addItem = (product: Product, size: CartItem['size']) => {
    const existingItem = items.find(
      (x) => x.product === product && x.size === size
    )
    if (existingItem) {
      updateQauntity(existingItem.id, 1)
      return
    }

    const newItem: CartItem = {
      id: randomUUID(),
      product,
      product_id: product.id,
      size,
      quantity: 1,
    }

    setItems((items) => [...items, newItem])
  }
  const updateQauntity = (itemId: string, amount: -1 | 1) => {
    setItems(
      items
        .map((item) =>
          item.id !== itemId
            ? item
            : { ...item, quantity: item.quantity + amount }
        )
        .filter((x) => x.quantity > 0)
    )
  }
  const total = parseInt(
    items
      .reduce((sum, item) => (sum += item.product.price * item.quantity), 0)
      .toFixed(2)
  )
  return (
    <CartContext.Provider value={{ items, addItem, updateQauntity, total }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
export const useCart = () => useContext(CartContext)
