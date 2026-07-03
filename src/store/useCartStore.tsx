import { create } from 'zustand'

type CartItem = {
  productId: number
  quantity: number
}

type CartStore = {
  cartItems: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (productId: number) => void
  updateCart: (newCartItems: CartItem[]) => void
}

const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addToCart: (item) => set((state) => {
    const existing = state.cartItems.find((i) => i.productId === item.productId)
    if (existing) {
      return {
        cartItems: state.cartItems.map((i) =>
          i.productId === item.productId ? { ...i, quantity: i.quantity + item.quantity } : i
        ),
      }
    }
    return { cartItems: [...state.cartItems, item] }
  }),
  removeFromCart: (productId) => set((state) => ({
    cartItems: state.cartItems.filter((i) => i.productId !== productId),
  })),
  updateCart: (newCartItems) => set({ cartItems: newCartItems }),
}))

export default useCartStore
