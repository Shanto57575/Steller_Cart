import { getStoredCart } from '../utils/fakeDB'

export const productsAndCartData = async () => {
  const productsData = await fetch('https://dummyjson.com/products')
  const products = await productsData.json();
  const realProducts = products.products;

  const savedCart = getStoredCart()
  const initialCart = []
  for (const id in savedCart) {
    const foundProduct = realProducts.find(product => product.id === id)
    if (foundProduct) {
      const quantity = savedCart[id]
      foundProduct.quantity = quantity
      initialCart.push(foundProduct)
    }
  }

  return { products: realProducts, initialCart }
}
