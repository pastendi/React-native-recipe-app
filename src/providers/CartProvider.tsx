import { PropsWithChildren, createContext, useContext, useState } from 'react'
import { CartItem, Product } from '../types'

type CartType = {
  items: CartItem[]
  addItem: (product: Product, size: CartItem['size']) => void
}

const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
})

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([])

  //  increase  quanitity if already exists

  const addItem = (product: Product, size: CartItem['size']) => {
    const newItem: CartItem = {
      id: '54', //generate new id
      product,
      product_id: product.id,
      size,
      quantity: 1,
    }
    setItems((items) => [...items, newItem])
  }
  //   function to update quantity

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
export const useCart = () => useContext(CartContext)
