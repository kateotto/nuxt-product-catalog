import type { Product } from '~/types/product'

export const useProducts = () => {
  const { data, status: getProductsStatus } = useFetch<Product[]>('/api/products')

  const products = computed(() => (data.value as Product[]) ?? [])

  return { products, getProductsStatus }
}
