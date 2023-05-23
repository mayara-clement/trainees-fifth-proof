import { CartProvider } from '@/data/contexts/cart'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '@/logic/graphql/client'

export default function App({ Component, pageProps }: AppProps) {
  return   (
    <ApolloProvider client={client}>
      <CartProvider >
        <Component {...pageProps} />
      </CartProvider> 
    </ApolloProvider>
  )  
}
