import { ReactElement, useState, createContext, useEffect } from 'react'
import { orderForm } from '@/logic/graphql/querys/orderForm'
import { useLazyQuery } from '@apollo/client'

interface Product {
  id: string
  name: string
  image: string
  listPrice: string
  price: string
  shipping: {
    delivery: {
      days: string
      value?: string
    }
    pickup: boolean
  }
}

interface CartContext {
  cartProducts: Array<Product>
  cartSummary: {
    subtotal: number
    discount: number
    shipping: number
    total: number
  }

  removeFromCart: (productId: string) => void
}

type CartProviderProps = {
  children: ReactElement
}

export const CartContext = createContext<CartContext>({} as CartContext)

export function CartProvider({ children }: CartProviderProps) {
  const [cartProducts, setCartProducts] = useState<Array<Product>>([])
  const cartSummary = calculateCart(cartProducts)
  const [getOrderForm, { data: orderFormData }] = useLazyQuery(orderForm)

  useEffect(() => {
    if (!orderFormData) {
      return
    }
    console.log('orderFormData', orderFormData.orderForm.items)

    setCartProducts(orderFormData.orderForm.items)
  }, [orderFormData])

  useEffect(() => {
    getOrderForm({
      variables: {
        input: {
          orderFormId: 'c7eb7303-c53f-417d-8d51-cce67e5959e1'
        }
      }
    })
  }, [getOrderForm])

  function calculateCart(products: Product[]) {
    const subtotal = products.reduce(
      (acc, product) => acc + Number(product.listPrice),
      0
    )
    const discount = products.reduce(
      (acc, product) =>
        acc + (Number(product.listPrice) - Number(product.price)),
      0
    )

    const shipping = products.reduce(
      (acc, product) => acc + Number(product.shipping.delivery?.value ?? 0),
      0
    )

    const total = subtotal - discount

    return {
      subtotal,
      discount,
      shipping,
      total
    }
  }

  const removeFromCart = (productId: string) => {
    const updatedCartProducts = cartProducts.filter(
      product => product.id !== productId
    )

    setCartProducts(updatedCartProducts)
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        removeFromCart,
        cartSummary
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
