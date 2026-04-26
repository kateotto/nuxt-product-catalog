import { readFileSync } from 'fs'
import { resolve } from 'path'
import Papa from 'papaparse'
import type { Product } from '~/types/product'

export default defineEventHandler(async (): Promise<Product[]> => {
  let csv: string

  if (process.dev) {
    csv = readFileSync(resolve(process.cwd(), 'server/assets/data/products.csv'), 'utf-8')
  } else {
    csv = await useStorage('assets/data').getItem('products.csv') as string
  }

  const { data } = Papa.parse(csv, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true,
  })

  return data as Product[]
})