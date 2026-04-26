import Papa from 'papaparse'

import type { Product } from '~/types/product'

export default defineEventHandler((): Product[] => {
  const { productsCsv } = useRuntimeConfig()

  const { data } = Papa.parse(productsCsv, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true,
  })

  return data as Product[]
})
