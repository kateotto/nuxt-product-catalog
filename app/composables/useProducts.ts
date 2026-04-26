import type { Product } from '~/types/product'
import { useDebounce } from '~/composables/useDebounce'

export const useProducts = () => {
  const { data, status: getProductsStatus } = useFetch<Product[]>('/api/products')

  const search = useState<string>('search', () => '')
  const priceFrom = useState<number>('priceFrom', () => 0)
  const priceTo = useState<number>('priceTo', () => 0)
  const category = useState<string>('category', () => '')
  const manufacturer = useState<string[]>('manufacturer', () => [])

  const debouncedSearch = useDebounce(search, 300)

  const products = computed(() => (data.value as Product[]) ?? [])
  const minPrice = computed(() => Math.min(...products.value.map((p) => p.price)))
  const maxPrice = computed(() => Math.max(...products.value.map((p) => p.price)))
  const categories = computed(() => [...new Set(products.value.map((p) => p.category))])
  const manufacturers = computed(() => [...new Set(products.value.map((p) => p.manufacturer))])

  watch(
    products,
    (newProducts) => {
      if (newProducts.length > 0) {
        priceFrom.value = Math.min(...newProducts.map((p) => p.price))
        priceTo.value = Math.max(...newProducts.map((p) => p.price))
      }
    },
    { immediate: true },
  )

  const filteredProducts = computed(() => {
    return products.value.filter(
      (p) =>
        (!debouncedSearch.value ||
          p.name.toLocaleLowerCase().includes(debouncedSearch.value.toLocaleLowerCase()) ||
          p.manufacturer.toLocaleLowerCase().includes(debouncedSearch.value.toLocaleLowerCase()) ||
          p.description.toLocaleLowerCase().includes(debouncedSearch.value.toLocaleLowerCase())) &&
        (!category.value || p.category === category.value) &&
        (manufacturer.value.length === 0 || manufacturer.value.includes(p.manufacturer)) &&
        p.price >= priceFrom.value &&
        p.price <= priceTo.value,
    )
  })

  return {
    products,
    filteredProducts,
    getProductsStatus,
    search,
    minPrice,
    maxPrice,
    priceFrom,
    priceTo,
    categories,
    category,
    manufacturer,
    manufacturers,
  }
}
