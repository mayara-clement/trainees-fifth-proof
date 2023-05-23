import CheckoutSummary from '@/components/CheckoutSummary'
import Header from '@/components/Header'
import ProductOverview from '@/components/ProductOverview'

export default function Checkout() {
  return (
    <div>
      <Header />
      <div className="container">
        <ProductOverview />
        <CheckoutSummary />
      </div>
    </div>
  )
}
