import { gql } from '@apollo/client'

export const orderForm = gql`
    query  orderForm($input: OrderFormInput!){
    orderForm(input: $input){
      id
      items{
        id
        name
        image
        listPrice
        price
        shipping{
          delivery{
            days
            value
          }
          pickup
        }
      }
    }
  }
`
